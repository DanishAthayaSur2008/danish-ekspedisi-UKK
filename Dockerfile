# syntax=docker/dockerfile:1
# Dockerfile - Ekspedisi Online (Next.js + Prisma + MySQL)
# Dipakai bareng-bareng oleh service: migrate, web1, web2, web3 (docker-compose.yml)

########################################
# Stage 1: Dependencies
########################################
FROM node:20-slim AS deps
WORKDIR /app

# openssl dibutuhkan Prisma query engine buat resolve versi lib yang tepat
RUN apt-get update -y \
    && apt-get install -y --no-install-recommends openssl \
    && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm ci

########################################
# Stage 2: Builder
########################################
FROM node:20-slim AS builder
WORKDIR /app

RUN apt-get update -y \
    && apt-get install -y --no-install-recommends openssl \
    && rm -rf /var/lib/apt/lists/*

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma Client sesuai schema.prisma SEBELUM next build
# (di-generate di image yang sama dengan runtime, biar gak ada mismatch OS/libc)
RUN npx prisma generate

# Build production Next.js
RUN npm run build

########################################
# Stage 3: Runner (production, image final)
########################################
FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# openssl -> dibutuhkan prisma query engine saat runtime
# netcat-openssl -> dipakai entrypoint.sh buat nunggu MySQL ready
RUN apt-get update -y \
    && apt-get install -y --no-install-recommends openssl netcat-openbsd \
    && rm -rf /var/lib/apt/lists/*

# Copy hasil build & dependency production dari stage builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/next.config.ts ./next.config.ts

# Entrypoint: nunggu DB ready, jalanin migrate/seed (kalau ditandai), atau start app
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["./entrypoint.sh"]
CMD ["npm", "run", "start"]