#!/bin/bash
# Jalankan script ini DI DALAM VM1 (Ubuntu), di folder root project,
# sebelum "docker compose up". Hasilnya: ssl/ekspedisi.crt & ssl/ekspedisi.key

set -e

CERT_DIR="$(dirname "$0")"
CN="${1:-172.20.3.63}"   # default: IP VM1 sesuai absen no.7, bisa dioverride: ./generate-cert.sh <ip_atau_domain>

openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout "${CERT_DIR}/ekspedisi.key" \
  -out "${CERT_DIR}/ekspedisi.crt" \
  -subj "/C=ID/ST=JawaBarat/L=Bogor/O=EkspedisiOnline/OU=UKK-SIJA/CN=${CN}"

chmod 600 "${CERT_DIR}/ekspedisi.key"

echo "✅ Sertifikat self-signed berhasil dibuat:"
echo "   - ${CERT_DIR}/ekspedisi.crt"
echo "   - ${CERT_DIR}/ekspedisi.key"
echo "   CN = ${CN}"
