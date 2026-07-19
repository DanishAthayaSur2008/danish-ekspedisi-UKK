#!/bin/bash
# Jalankan DI DALAM VM2 (Ubuntu), di folder root project, sebelum "docker compose up".
# Hasil: ssl/ekspedisi.crt & ssl/ekspedisi.key

set -e

CERT_DIR="$(dirname "$0")"
CN="${1:-192.168.12.64}"   # default: IP VM2 (absen 7), bisa dioverride: ./generate-cert.sh <ip>

openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout "${CERT_DIR}/ekspedisi.key" \
  -out "${CERT_DIR}/ekspedisi.crt" \
  -subj "/C=ID/ST=JawaBarat/L=Bogor/O=EkspedisiOnline/OU=UKK-SIJA/CN=${CN}"

chmod 600 "${CERT_DIR}/ekspedisi.key"

echo "✅ Sertifikat self-signed berhasil dibuat (CN=${CN})"