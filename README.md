# JIVOO SaaS POS

Jivoo adalah aplikasi POS & manajemen bisnis multi-tenant dan multi-outlet.
Target launch: **16 September 2026**.

## Struktur
- `apps/pos` — Front Office / aplikasi kasir
- `apps/dashboard` — Back Office / owner & management
- `apps/api` — Node.js + Express REST API
- `packages/shared` — tipe dan konstanta bersama
- `prisma` — PostgreSQL schema & seed

## Fitur MVP
Front Office:
Login, buka kasir, absensi, POS, produk, cart, pelanggan, promo, order type,
pembayaran, invoice, receipt, penjualan, tutup kasir.

Back Office:
Dashboard, laporan, analitik, produk, inventory, member, promosi, staff/role,
komisi, keuangan, dan e-commerce/order online sebagai fondasi modul.

## Menjalankan
1. `npm install`
2. Salin `.env.example` menjadi `.env`
3. Isi `DATABASE_URL`
4. `npm run db:generate`
5. `npm run db:migrate`
6. `npm run db:seed`
7. `npm run dev`

POS: `http://localhost:5173`
Dashboard: `http://localhost:5174`
API: `http://localhost:4000`

Catatan: payment gateway/QRIS produksi dan integrasi marketplace perlu credential
provider sebelum benar-benar menerima pembayaran live.
