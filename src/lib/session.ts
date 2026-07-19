import { cookies } from "next/headers";
import { randomUUID } from "crypto";
import fs from "node:fs";
import path from "node:path";

import { UnauthorizedError, ValidationError } from "@/lib/errors";
import type { AuthRole, IdentityType } from "@/types/auth";

export const SESSION_COOKIE_NAME = "session_id";

const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;
const CAPTCHA_MAX_AGE_MS = 5 * 60 * 1000;

type CaptchaState = {
  answer: string;
  expiresAt: number;
};

export type SessionUser = {
  userId: number;
  type: IdentityType;
  role: AuthRole;
  email: string;
};

type ServerSession = {
  user?: SessionUser;
  captcha?: CaptchaState;
  expiresAt: number;
};

// ====================================================================
// TRIK DEVOPS: Membuat folder bersama di dalam kontainer Docker
// ====================================================================
const SHARED_DIR = path.join(process.cwd(), "sessions_share");
if (!fs.existsSync(SHARED_DIR)) {
  fs.mkdirSync(SHARED_DIR, { recursive: true });
}

// Fungsi pembantu untuk membaca data session dari file JSON
function getSession(id: string): ServerSession | undefined {
  const filePath = path.join(SHARED_DIR, `${id}.json`);
  if (!fs.existsSync(filePath)) return undefined;
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return undefined;
  }
}

// Fungsi pembantu untuk menulis data session ke file JSON
function setSession(id: string, session: ServerSession) {
  const filePath = path.join(SHARED_DIR, `${id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(session), "utf8");
}

// Fungsi pembantu untuk menghapus file session
function deleteSession(id: string) {
  const filePath = path.join(SHARED_DIR, `${id}.json`);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
}

function sessionCookieOptions() {
  return {
    httpOnly: true,
    secure: false, // Wajib false agar tembus di HTTP biasa port 8080
    sameSite: "lax" as const,
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  };
}

function cleanupExpiredSessions() {
  const now = Date.now();
  try {
    const files = fs.readdirSync(SHARED_DIR);
    for (const file of files) {
      if (file.endsWith(".json")) {
        const filePath = path.join(SHARED_DIR, file);
        const content = fs.readFileSync(filePath, "utf8");
        const session = JSON.parse(content);
        if (session.expiresAt <= now) {
          fs.unlinkSync(filePath);
        }
      }
    }
  } catch {}
}

export async function getOrCreateSessionId() {
  cleanupExpiredSessions();

  const cookieStore = await cookies();
  const existingSessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (existingSessionId && getSession(existingSessionId)) {
    return existingSessionId;
  }

  const sessionId = randomUUID();
  setSession(sessionId, {
    expiresAt: Date.now() + SESSION_MAX_AGE_SECONDS * 1000,
  });
  cookieStore.set(SESSION_COOKIE_NAME, sessionId, sessionCookieOptions());

  return sessionId;
}

export async function setCaptchaAnswer(answer: string) {
  const sessionId = await getOrCreateSessionId();
  const session = getSession(sessionId);

  if (!session) {
    throw new UnauthorizedError("Invalid session");
  }

  session.captcha = {
    answer: answer.toLowerCase(),
    expiresAt: Date.now() + CAPTCHA_MAX_AGE_MS,
  };
  session.expiresAt = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  setSession(sessionId, session);

  return sessionId;
}

export async function verifyCaptchaInput(captchaInput: string) {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!sessionId) {
    throw new ValidationError("Captcha belum dibuat", {
      captchaInput: ["Generate captcha terlebih dahulu."],
    });
  }

  const session = getSession(sessionId);

  if (!session?.captcha || session.captcha.expiresAt <= Date.now()) {
    throw new ValidationError("Captcha sudah kedaluwarsa", {
      captchaInput: ["Generate captcha ulang."],
    });
  }

  if (captchaInput.trim().toLowerCase() !== session.captcha.answer) {
    throw new ValidationError("Captcha salah", {
      captchaInput: ["Captcha salah."],
    });
  }

  delete session.captcha;
  setSession(sessionId, session);
}

export async function createAuthSession(user: SessionUser) {
  const sessionId = await getOrCreateSessionId();
  const session = getSession(sessionId);

  if (!session) {
    throw new UnauthorizedError("Invalid session");
  }

  session.user = user;
  session.expiresAt = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  setSession(sessionId, session);

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, sessionId, sessionCookieOptions());
}

export async function getSessionUser() {
  cleanupExpiredSessions();

  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!sessionId) {
    throw new UnauthorizedError("Unauthorized");
  }

  const session = getSession(sessionId);

  if (!session?.user || session.expiresAt <= Date.now()) {
    throw new UnauthorizedError("Unauthorized");
  }

  return session.user;
}

export async function destroySession() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (sessionId) {
    deleteSession(sessionId);
  }

  cookieStore.delete(SESSION_COOKIE_NAME);
  cookieStore.delete("access_token");
  cookieStore.delete("refresh_token");
}
