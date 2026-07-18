#!/bin/sh
set -e

DB_HOST="${DB_HOST:-db}"
DB_PORT="${DB_PORT:-3306}"

echo "⏳ [entrypoint] Menunggu MySQL di ${DB_HOST}:${DB_PORT} ..."
until nc -z "$DB_HOST" "$DB_PORT" 2>/dev/null; do
  echo "   ...belum siap, retry 2 detik lagi"
  sleep 2
done
echo "✅ [entrypoint] Database sudah bisa dikoneksi."

# Container ini dipakai untuk 2 peran (diatur lewat env RUN_MIGRATIONS di docker-compose.yml):
#   1. RUN_MIGRATIONS=true  -> service "migrate": jalanin prisma db push + db seed lalu EXIT (one-off job)
#   2. RUN_MIGRATIONS=false -> service "web1/web2/web3": langsung start Next.js

if [ "$RUN_MIGRATIONS" = "true" ]; then
  echo "🚀 [migrate] Menjalankan: npx prisma db push"
  npx prisma db push --skip-generate

  echo "🌱 [migrate] Menjalankan: npx prisma db seed"
  npx prisma db seed

  echo "✅ [migrate] Migrasi & seeding selesai. Container migrate keluar (exit 0)."
  exit 0
fi

echo "🚀 [web:${INSTANCE_NAME:-unknown}] Menjalankan aplikasi Next.js..."
exec "$@"