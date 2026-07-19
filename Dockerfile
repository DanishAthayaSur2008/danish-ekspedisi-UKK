# syntax=docker/dockerfile:1
# Dockerfile - Ekspedisi Online (Next.js + Prisma + MySQL)
# Sesuai soal asli: dijalankan di VM2, 2 container (app1 & app2) di belakang loadbalancer
# Dipakai bareng-bareng oleh service: migrate, app1, app2 (docker-compose.yml)

########################################
# Stage 1: Dependencies
########################################
FROM node:20-slim AS deps
WORKDIR /app

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

# openssl -> prisma query engine runtime
# netcat-openssl -> entrypoint.sh nunggu MySQL ready
RUN apt-get update -y \
    && apt-get install -y --no-install-recommends openssl netcat-openssl \
    && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/next.config.ts ./next.config.ts

# Pastikan folder uploads ada (bakal jadi mount point "app-volume")
RUN mkdir -p /app/public/uploads/profile

COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["./entrypoint.sh"]
CMD ["npm", "run", "start"]