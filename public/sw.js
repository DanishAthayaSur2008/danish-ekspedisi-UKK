if (!self.define) {
  let c,
    e = {};
  const a = (a, s) => (
    (a = new URL(a + ".js", s).href),
    e[a] ||
      new Promise((e) => {
        if ("document" in self) {
          const c = document.createElement("script");
          ((c.src = a), (c.onload = e), document.head.appendChild(c));
        } else ((c = a), importScripts(a), e());
      }).then(() => {
        let c = e[a];
        if (!c) throw new Error(`Module ${a} didn’t register its module`);
        return c;
      })
  );
  self.define = (s, i) => {
    const d =
      c ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (e[d]) return;
    let t = {};
    const n = (c) => a(c, d),
      r = { module: { uri: d }, exports: t, require: n };
    e[d] = Promise.all(s.map((c) => r[c] || n(c))).then((c) => (i(...c), t));
  };
}
define(["./workbox-f52fd911"], function (c) {
  "use strict";
  (importScripts("fallback-vJztHgTSWhhN6QHydyZ5l.js"),
    self.skipWaiting(),
    c.clientsClaim(),
    c.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "a13e1a52a2ed7be0ba49b46cc2197e96",
        },
        {
          url: "/_next/static/chunks/1255-b8cf77ab14370e57.js",
          revision: "b8cf77ab14370e57",
        },
        {
          url: "/_next/static/chunks/1461-5fa0b09f6f8b45be.js",
          revision: "5fa0b09f6f8b45be",
        },
        {
          url: "/_next/static/chunks/1646.a93085a0445ba909.js",
          revision: "a93085a0445ba909",
        },
        {
          url: "/_next/static/chunks/164f4fb6-32fa297d9a2ab88f.js",
          revision: "32fa297d9a2ab88f",
        },
        {
          url: "/_next/static/chunks/2379-a90d14acf46d02c6.js",
          revision: "a90d14acf46d02c6",
        },
        {
          url: "/_next/static/chunks/2412-0e2bf027b438e94e.js",
          revision: "0e2bf027b438e94e",
        },
        {
          url: "/_next/static/chunks/2619-04bc32f026a0d946.js",
          revision: "04bc32f026a0d946",
        },
        {
          url: "/_next/static/chunks/2931.c108b4a770366ef4.js",
          revision: "c108b4a770366ef4",
        },
        {
          url: "/_next/static/chunks/2f0b94e8-3186a98eb4c9012b.js",
          revision: "3186a98eb4c9012b",
        },
        {
          url: "/_next/static/chunks/306-a0777b73f88993b0.js",
          revision: "a0777b73f88993b0",
        },
        {
          url: "/_next/static/chunks/3062-1b7604c4cd9a2aec.js",
          revision: "1b7604c4cd9a2aec",
        },
        {
          url: "/_next/static/chunks/3501-1f130303ef3c65bb.js",
          revision: "1f130303ef3c65bb",
        },
        {
          url: "/_next/static/chunks/3852-4f6ba41917882aa5.js",
          revision: "4f6ba41917882aa5",
        },
        {
          url: "/_next/static/chunks/4199.ac0c0f3efd36a974.js",
          revision: "ac0c0f3efd36a974",
        },
        {
          url: "/_next/static/chunks/4869-555d5415fc37933d.js",
          revision: "555d5415fc37933d",
        },
        {
          url: "/_next/static/chunks/4bd1b696-100b9d70ed4e49c1.js",
          revision: "100b9d70ed4e49c1",
        },
        {
          url: "/_next/static/chunks/5139.e4ff9cc3669129ed.js",
          revision: "e4ff9cc3669129ed",
        },
        {
          url: "/_next/static/chunks/5173-449b599955c03574.js",
          revision: "449b599955c03574",
        },
        {
          url: "/_next/static/chunks/5667-34bc1f64c366c984.js",
          revision: "34bc1f64c366c984",
        },
        {
          url: "/_next/static/chunks/5773-8331af16d70aadbd.js",
          revision: "8331af16d70aadbd",
        },
        {
          url: "/_next/static/chunks/5854-4855e62560781c6a.js",
          revision: "4855e62560781c6a",
        },
        {
          url: "/_next/static/chunks/605-37039e45ef6258ec.js",
          revision: "37039e45ef6258ec",
        },
        {
          url: "/_next/static/chunks/66-b287cd7a96423bb1.js",
          revision: "b287cd7a96423bb1",
        },
        {
          url: "/_next/static/chunks/682-535d1675a709f809.js",
          revision: "535d1675a709f809",
        },
        {
          url: "/_next/static/chunks/7208-c3a29c8af7f8d7d4.js",
          revision: "c3a29c8af7f8d7d4",
        },
        {
          url: "/_next/static/chunks/760-8a1c4ab70c1ba23c.js",
          revision: "8a1c4ab70c1ba23c",
        },
        {
          url: "/_next/static/chunks/8170-1dedd4398c23be07.js",
          revision: "1dedd4398c23be07",
        },
        {
          url: "/_next/static/chunks/8304-04852c120352a204.js",
          revision: "04852c120352a204",
        },
        {
          url: "/_next/static/chunks/8720-c9ee040177c11cae.js",
          revision: "c9ee040177c11cae",
        },
        {
          url: "/_next/static/chunks/8847-a4c851d402edc5f4.js",
          revision: "a4c851d402edc5f4",
        },
        {
          url: "/_next/static/chunks/89-59497de4284a6477.js",
          revision: "59497de4284a6477",
        },
        {
          url: "/_next/static/chunks/9186-6fb824ac306025a0.js",
          revision: "6fb824ac306025a0",
        },
        {
          url: "/_next/static/chunks/927-66f030ba9957baf4.js",
          revision: "66f030ba9957baf4",
        },
        {
          url: "/_next/static/chunks/9461-d3a1dd6500b34b69.js",
          revision: "d3a1dd6500b34b69",
        },
        {
          url: "/_next/static/chunks/9511-07d8c3a5b6e1f9dc.js",
          revision: "07d8c3a5b6e1f9dc",
        },
        {
          url: "/_next/static/chunks/ad2866b8.e13a3cf75ccf0eb8.js",
          revision: "e13a3cf75ccf0eb8",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/branches/%5Bid%5D/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/branches/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/customers/%5Bid%5D/activate/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/customers/%5Bid%5D/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/customers/%5Bid%5D/suspend/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/customers/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/dashboard/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/payments/%5Bid%5D/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/payments/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/rates/%5Bid%5D/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/rates/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/shipments/%5Bid%5D/assign-courier/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/shipments/%5Bid%5D/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/shipments/%5Bid%5D/status/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/shipments/receive/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/shipments/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/trackings/%5Bid%5D/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/trackings/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/users/%5Bid%5D/activate/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/users/%5Bid%5D/deactivate/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/users/%5Bid%5D/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/users/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/vehicles/%5Bid%5D/assign-courier/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/vehicles/%5Bid%5D/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/admin/vehicles/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/auth/captcha/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/auth/logout/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/auth/me/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/auth/refresh/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/cashier/dashboard/summary/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/cashier/orders/%5Bid%5D/assign-courier/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/cashier/orders/%5Bid%5D/confirm/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/cashier/orders/%5Bid%5D/reject/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/cashier/orders/%5Bid%5D/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/cashier/orders/recent/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/cashier/orders/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/cashier/orders/verify-resi/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/cashier/payments/%5Bid%5D/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/cashier/payments/%5Bid%5D/verify-cash/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/cashier/payments/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/cashier/reports/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/courier/shipments/%5Bid%5D/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/courier/shipments/%5Bid%5D/status/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/courier/shipments/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/customer/auth/login/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/customer/auth/register/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/customer/auth/resend-verification/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/customer/auth/verify-email/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/customer/notifications/%5Bid%5D/read/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/customer/notifications/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/customer/notifications/summary/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/customer/payments/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/customer/profile/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/customer/shipments/%5Bid%5D/cancel/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/customer/shipments/%5Bid%5D/payments/online/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/customer/shipments/%5Bid%5D/payments/sync/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/customer/shipments/%5Bid%5D/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/customer/shipments/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/manager/dashboard/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/manager/payments/summary/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/owner/dashboard/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/owner/payments/summary/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/public/branches/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/public/rates/check/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/public/tracking/%5BtrackingNumber%5D/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/staff/auth/login/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/staff/upload/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/api/v2/upload/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/cabang/page-33259d8ca38c1318.js",
          revision: "33259d8ca38c1318",
        },
        {
          url: "/_next/static/chunks/app/cek-ongkir/page-6b7a083c1461789f.js",
          revision: "6b7a083c1461789f",
        },
        {
          url: "/_next/static/chunks/app/customer/buat-pesanan/layout-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/customer/buat-pesanan/page-a089000f659a1ab6.js",
          revision: "a089000f659a1ab6",
        },
        {
          url: "/_next/static/chunks/app/customer/dashboard/layout-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/customer/dashboard/page-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/customer/dashboard/payments/page-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/customer/dashboard/profile/page-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/customer/dashboard/settings/page-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/customer/dashboard/shipments/%5Bid%5D/page-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/customer/dashboard/shipments/create/page-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/customer/dashboard/shipments/page-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/customer/dashboard/tracking/page-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/customer/inbox/page-cff4bdd20194e3d7.js",
          revision: "cff4bdd20194e3d7",
        },
        {
          url: "/_next/static/chunks/app/customer/lacak-paket/layout-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/customer/lacak-paket/page-bd769c626dcb1518.js",
          revision: "bd769c626dcb1518",
        },
        {
          url: "/_next/static/chunks/app/customer/layout-8022db29577b501a.js",
          revision: "8022db29577b501a",
        },
        {
          url: "/_next/static/chunks/app/customer/login/page-8b70b360cd5b9764.js",
          revision: "8b70b360cd5b9764",
        },
        {
          url: "/_next/static/chunks/app/customer/page-af861ddc8f92cbe9.js",
          revision: "af861ddc8f92cbe9",
        },
        {
          url: "/_next/static/chunks/app/customer/pembayaran/%5Bid%5D/page-5f70e08e69409673.js",
          revision: "5f70e08e69409673",
        },
        {
          url: "/_next/static/chunks/app/customer/pembayaran/layout-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/customer/pembayaran/sukses/page-033d71150f3c8d71.js",
          revision: "033d71150f3c8d71",
        },
        {
          url: "/_next/static/chunks/app/customer/pesanan/%5Bid%5D/page-f5420731776fa939.js",
          revision: "f5420731776fa939",
        },
        {
          url: "/_next/static/chunks/app/customer/profile/page-6e315d2253848643.js",
          revision: "6e315d2253848643",
        },
        {
          url: "/_next/static/chunks/app/customer/register/page-0816ac96cde72124.js",
          revision: "0816ac96cde72124",
        },
        {
          url: "/_next/static/chunks/app/customer/verify-email/layout-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/customer/verify-email/page-c280cdcffbdd879c.js",
          revision: "c280cdcffbdd879c",
        },
        {
          url: "/_next/static/chunks/app/error-cc20e13b5aee0a2f.js",
          revision: "cc20e13b5aee0a2f",
        },
        {
          url: "/_next/static/chunks/app/kontak/page-256935648d0a5b84.js",
          revision: "256935648d0a5b84",
        },
        {
          url: "/_next/static/chunks/app/layout-55309499aee3472c.js",
          revision: "55309499aee3472c",
        },
        {
          url: "/_next/static/chunks/app/loading-dd70d87ba953e822.js",
          revision: "dd70d87ba953e822",
        },
        {
          url: "/_next/static/chunks/app/login/page-a0f180cd7f5db2e8.js",
          revision: "a0f180cd7f5db2e8",
        },
        {
          url: "/_next/static/chunks/app/not-found-4dcb01487d415639.js",
          revision: "4dcb01487d415639",
        },
        {
          url: "/_next/static/chunks/app/offline/page-d677a684d732fc12.js",
          revision: "d677a684d732fc12",
        },
        {
          url: "/_next/static/chunks/app/page-49375564ea77396f.js",
          revision: "49375564ea77396f",
        },
        {
          url: "/_next/static/chunks/app/robots.txt/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/sitemap.xml/route-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/staff/admin/branches/page-63912aeb32a3c4d8.js",
          revision: "63912aeb32a3c4d8",
        },
        {
          url: "/_next/static/chunks/app/staff/admin/customers/page-42b43ed1027bcf91.js",
          revision: "42b43ed1027bcf91",
        },
        {
          url: "/_next/static/chunks/app/staff/admin/dashboard/page-f3aec4d6b1bded86.js",
          revision: "f3aec4d6b1bded86",
        },
        {
          url: "/_next/static/chunks/app/staff/admin/payments/page-4ca1806e4d3263ad.js",
          revision: "4ca1806e4d3263ad",
        },
        {
          url: "/_next/static/chunks/app/staff/admin/rates/page-c19bb568a3125455.js",
          revision: "c19bb568a3125455",
        },
        {
          url: "/_next/static/chunks/app/staff/admin/shipments/page-387626c5d0acb264.js",
          revision: "387626c5d0acb264",
        },
        {
          url: "/_next/static/chunks/app/staff/admin/staff/page-c9b0a7e1c8c27bb1.js",
          revision: "c9b0a7e1c8c27bb1",
        },
        {
          url: "/_next/static/chunks/app/staff/admin/vehicles/page-4a85d8ff0f289824.js",
          revision: "4a85d8ff0f289824",
        },
        {
          url: "/_next/static/chunks/app/staff/cashier/cash-verification/page-0b878827e72a9cc7.js",
          revision: "0b878827e72a9cc7",
        },
        {
          url: "/_next/static/chunks/app/staff/cashier/dashboard/page-9824795300cb76f8.js",
          revision: "9824795300cb76f8",
        },
        {
          url: "/_next/static/chunks/app/staff/cashier/laporan/page-a3fcd037817d994b.js",
          revision: "a3fcd037817d994b",
        },
        {
          url: "/_next/static/chunks/app/staff/cashier/payments/page-4ca1806e4d3263ad.js",
          revision: "4ca1806e4d3263ad",
        },
        {
          url: "/_next/static/chunks/app/staff/cashier/pesanan/page-d411ce61741e2b79.js",
          revision: "d411ce61741e2b79",
        },
        {
          url: "/_next/static/chunks/app/staff/cashier/reports/page-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/staff/cashier/tambah-pesanan/page-7e9ee8ba8e45f659.js",
          revision: "7e9ee8ba8e45f659",
        },
        {
          url: "/_next/static/chunks/app/staff/courier/dashboard/page-82fc896487d3f281.js",
          revision: "82fc896487d3f281",
        },
        {
          url: "/_next/static/chunks/app/staff/courier/deliveries/page-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/staff/courier/pickups/page-f3bc90c1dcbdc669.js",
          revision: "f3bc90c1dcbdc669",
        },
        {
          url: "/_next/static/chunks/app/staff/courier/shipments/page-387626c5d0acb264.js",
          revision: "387626c5d0acb264",
        },
        {
          url: "/_next/static/chunks/app/staff/layout-982c88fd02e858e0.js",
          revision: "982c88fd02e858e0",
        },
        {
          url: "/_next/static/chunks/app/staff/login/page-2e4d02761ef2eecf.js",
          revision: "2e4d02761ef2eecf",
        },
        {
          url: "/_next/static/chunks/app/staff/manager/analytics/page-6573cbbbeb6601da.js",
          revision: "6573cbbbeb6601da",
        },
        {
          url: "/_next/static/chunks/app/staff/manager/branches/page-63912aeb32a3c4d8.js",
          revision: "63912aeb32a3c4d8",
        },
        {
          url: "/_next/static/chunks/app/staff/manager/dashboard/page-fe626d07c914e0b1.js",
          revision: "fe626d07c914e0b1",
        },
        {
          url: "/_next/static/chunks/app/staff/manager/payments/page-4ca1806e4d3263ad.js",
          revision: "4ca1806e4d3263ad",
        },
        {
          url: "/_next/static/chunks/app/staff/manager/shipments/page-387626c5d0acb264.js",
          revision: "387626c5d0acb264",
        },
        {
          url: "/_next/static/chunks/app/staff/manager/users/page-c9b0a7e1c8c27bb1.js",
          revision: "c9b0a7e1c8c27bb1",
        },
        {
          url: "/_next/static/chunks/app/staff/owner/analytics/page-8d6a13ba14f9e08e.js",
          revision: "8d6a13ba14f9e08e",
        },
        {
          url: "/_next/static/chunks/app/staff/owner/dashboard/page-e6e7ed859f3f70d9.js",
          revision: "e6e7ed859f3f70d9",
        },
        {
          url: "/_next/static/chunks/app/tracking/%5BtrackingNumber%5D/page-4dcb01487d415639.js",
          revision: "4dcb01487d415639",
        },
        {
          url: "/_next/static/chunks/app/tracking/page-43f6ac1fc780588c.js",
          revision: "43f6ac1fc780588c",
        },
        {
          url: "/_next/static/chunks/bc98253f.d6fc8a0138855acd.js",
          revision: "d6fc8a0138855acd",
        },
        {
          url: "/_next/static/chunks/framework-eaf13c96191cb608.js",
          revision: "eaf13c96191cb608",
        },
        {
          url: "/_next/static/chunks/main-999f47c04695a867.js",
          revision: "999f47c04695a867",
        },
        {
          url: "/_next/static/chunks/main-app-bd4e3c1ba678088a.js",
          revision: "bd4e3c1ba678088a",
        },
        {
          url: "/_next/static/chunks/pages/_app-e8b861c87f6f033c.js",
          revision: "e8b861c87f6f033c",
        },
        {
          url: "/_next/static/chunks/pages/_error-c8f84f7bd11d43d4.js",
          revision: "c8f84f7bd11d43d4",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-0f851d9c3484e742.js",
          revision: "0f851d9c3484e742",
        },
        {
          url: "/_next/static/css/93d694f4d2466104.css",
          revision: "93d694f4d2466104",
        },
        {
          url: "/_next/static/css/e9c4e804f81af063.css",
          revision: "e9c4e804f81af063",
        },
        {
          url: "/_next/static/media/19cfc7226ec3afaa-s.woff2",
          revision: "9dda5cfc9a46f256d0e131bb535e46f8",
        },
        {
          url: "/_next/static/media/21350d82a1f187e9-s.woff2",
          revision: "4e2553027f1d60eff32898367dd4d541",
        },
        {
          url: "/_next/static/media/36966cca54120369-s.p.woff2",
          revision: "25ea4a783c12103f175f5b157b7d96aa",
        },
        {
          url: "/_next/static/media/558ca1a6aa3cb55e-s.p.woff2",
          revision: "570751c5f8b418972c1976160ba6ed85",
        },
        {
          url: "/_next/static/media/64d784ea54a4acde-s.woff2",
          revision: "8a5b33d747f0cfaac631ad00bd5bcba2",
        },
        {
          url: "/_next/static/media/6d831b18ae5b01dc-s.woff2",
          revision: "e6155c5cfacf3867c500daf0ebcba222",
        },
        {
          url: "/_next/static/media/8e9860b6e62d6359-s.woff2",
          revision: "01ba6c2a184b8cba08b0d57167664d75",
        },
        {
          url: "/_next/static/media/ac0e76ddaeeb7981-s.woff2",
          revision: "6465b62dd12646a816e0d80f024ab07f",
        },
        {
          url: "/_next/static/media/b7387a63dd068245-s.woff2",
          revision: "dea099b7d5a5ea45bd4367f8aeff62ab",
        },
        {
          url: "/_next/static/media/ba9851c3c22cd980-s.woff2",
          revision: "9e494903d6b0ffec1a1e14d34427d44d",
        },
        {
          url: "/_next/static/media/c5fe6dc8356a8c31-s.woff2",
          revision: "027a89e9ab733a145db70f09b8a18b42",
        },
        {
          url: "/_next/static/media/df0a9ae256c0569c-s.woff2",
          revision: "d54db44de5ccb18886ece2fda72bdfe0",
        },
        {
          url: "/_next/static/media/e1aab0933260df4d-s.woff2",
          revision: "207f8e9f3761dbd724063a177d906a99",
        },
        {
          url: "/_next/static/media/e4af272ccee01ff0-s.p.woff2",
          revision: "65850a373e258f1c897a2b3d75eb74de",
        },
        {
          url: "/_next/static/media/edc640959b0c7826-s.woff2",
          revision: "5508edf7c10fe677025b8c88a2578acb",
        },
        {
          url: "/_next/static/media/ff71da380fbe67dd-s.woff2",
          revision: "60d32697500d4779da3725134067ad31",
        },
        {
          url: "/_next/static/vJztHgTSWhhN6QHydyZ5l/_buildManifest.js",
          revision: "5451eaf4b7250fb88c0820cad9a85301",
        },
        {
          url: "/_next/static/vJztHgTSWhhN6QHydyZ5l/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/images/icon-192.png",
          revision: "e988edcebbd9fc0f898976b89563580f",
        },
        {
          url: "/images/icon-512.png",
          revision: "6175aa3b9acba8e1575cfccad36a2b32",
        },
        {
          url: "/images/logo.png",
          revision: "e988edcebbd9fc0f898976b89563580f",
        },
        { url: "/manifest.json", revision: "d2430663dde900a182706e618f546324" },
        { url: "/offline", revision: "vJztHgTSWhhN6QHydyZ5l" },
        {
          url: "/uploads/07fb0e12f1f2c91566046c4992a2a5ef.webp",
          revision: "c802e2e05dd376e925831a157f7a39f6",
        },
        {
          url: "/uploads/0bd62545e68b44f9312038cb99d9540f.jpg",
          revision: "c68900ecb462127ede5521b3ebee10fa",
        },
        {
          url: "/uploads/0d7541d74351d33457b31e727c3255da.png",
          revision: "5f2f6344e5e601a88c720cd31f90859b",
        },
        {
          url: "/uploads/18128f08377a2897ed286bc59c775d6d.png",
          revision: "2e9645c8a64e55d6ba811f029600ca70",
        },
        {
          url: "/uploads/19cd7b590716da4afe1f57573e794866.png",
          revision: "2e9645c8a64e55d6ba811f029600ca70",
        },
        {
          url: "/uploads/1b4eb4500242d09aef541a7422653114.jpg",
          revision: "d68a7d6d2b1a1707044ea5ba372bf1d3",
        },
        {
          url: "/uploads/1e38fe013e93e859e5bb9e4289c6e0d0.jfif",
          revision: "b859d74ec9337d9c5031ae0c17606acc",
        },
        {
          url: "/uploads/1f07217ae539462ad8bffa6f5e95b638.png",
          revision: "2e9645c8a64e55d6ba811f029600ca70",
        },
        {
          url: "/uploads/25c5d18d985f00b20ff32211a26e85c8.png",
          revision: "2e9645c8a64e55d6ba811f029600ca70",
        },
        {
          url: "/uploads/36c887c4638eb91790784e0e34cd8249.png",
          revision: "937ac3fcc5c806a8aca3f46df5e28fe4",
        },
        {
          url: "/uploads/37c585f10fa5e2e97e98b7309e3dbfd4.png",
          revision: "5dd98e7b923c72bc209fa31e7be01355",
        },
        {
          url: "/uploads/42f9cb4b7155bf01f76bf8cf6e5fa256.jpg",
          revision: "a7509aa2597e04aa2ef57bb40393e193",
        },
        {
          url: "/uploads/465084b2d461472d5d9d40071603b598.png",
          revision: "5f2f6344e5e601a88c720cd31f90859b",
        },
        {
          url: "/uploads/4a2d14f2ac0557fbeda5a537b0b4d139.png",
          revision: "2e9645c8a64e55d6ba811f029600ca70",
        },
        {
          url: "/uploads/4e58b052fbf6a7a79cf0ba817960a08b.png",
          revision: "2e9645c8a64e55d6ba811f029600ca70",
        },
        {
          url: "/uploads/540784ddee20783cd54ba6400e10b647.png",
          revision: "2e9645c8a64e55d6ba811f029600ca70",
        },
        {
          url: "/uploads/5b4fbc11a7a8be66f19173cc877972ca.png",
          revision: "2e9645c8a64e55d6ba811f029600ca70",
        },
        {
          url: "/uploads/66500827ac7156b179d92f0752e40e34.png",
          revision: "178f19043eda72440acd920fbc8d0f09",
        },
        {
          url: "/uploads/6f6a80797aec123393a17cbff589835d.jpg",
          revision: "a7509aa2597e04aa2ef57bb40393e193",
        },
        {
          url: "/uploads/8054b4e4d624b907afdbcad7d5fbfd39.png",
          revision: "007bd159a5d2b0e3b3dc188d56237324",
        },
        {
          url: "/uploads/8777b7177dfa6d254ca2bea2909c50a3.png",
          revision: "2e9645c8a64e55d6ba811f029600ca70",
        },
        {
          url: "/uploads/8d9129c07e35257db7976ab9f67116ff.png",
          revision: "2e9645c8a64e55d6ba811f029600ca70",
        },
        {
          url: "/uploads/931e82dcc3d735ace0153b8ca9607bd9.png",
          revision: "2e9645c8a64e55d6ba811f029600ca70",
        },
        {
          url: "/uploads/98b0c5de31c9eec5672a92614184b431.png",
          revision: "937ac3fcc5c806a8aca3f46df5e28fe4",
        },
        {
          url: "/uploads/a0236613e1a139ea9044087a1b7a36e2.png",
          revision: "2e9645c8a64e55d6ba811f029600ca70",
        },
        {
          url: "/uploads/a0bb63f7acb16e72c979cccd64856b47.png",
          revision: "2e9645c8a64e55d6ba811f029600ca70",
        },
        {
          url: "/uploads/a728b721e78f8283ee624361e33538ba.jpg",
          revision: "a7509aa2597e04aa2ef57bb40393e193",
        },
        {
          url: "/uploads/a944c46e2ee426c417c7d6cf72f10f11.png",
          revision: "5f2f6344e5e601a88c720cd31f90859b",
        },
        {
          url: "/uploads/ac85f44b1cfc9d580b6bd2d27eff04cf.webp",
          revision: "c802e2e05dd376e925831a157f7a39f6",
        },
        {
          url: "/uploads/ae9823646d28aed1e1e12691f1edf1f9.jpg",
          revision: "c68900ecb462127ede5521b3ebee10fa",
        },
        {
          url: "/uploads/b8b666980f3e611f7e09c8f3ed4e3332.jpg",
          revision: "a7509aa2597e04aa2ef57bb40393e193",
        },
        {
          url: "/uploads/b95feb25ea5ea96dd00692293f1bf0b1.jpg",
          revision: "a7509aa2597e04aa2ef57bb40393e193",
        },
        {
          url: "/uploads/d387e4d8f2f8d39999fd90012ecf1c55.webp",
          revision: "c802e2e05dd376e925831a157f7a39f6",
        },
        {
          url: "/uploads/e7eb1d8e0ae5be8cc537c7f35ebdd748.png",
          revision: "2e9645c8a64e55d6ba811f029600ca70",
        },
        {
          url: "/uploads/f0d6a78e40b720fad0f6aa89917ca2f1.png",
          revision: "67c7d08127c5244de1fdd3082913512a",
        },
        {
          url: "/uploads/profile/3810f077c234fad7792a108bbabba5c5.jpeg",
          revision: "588a9150e49c10a19274cfb01336a376",
        },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    c.cleanupOutdatedCaches(),
    c.registerRoute(
      "/",
      new c.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: c,
              response: e,
              event: a,
              state: s,
            }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: "OK",
                    headers: e.headers,
                  })
                : e,
          },
          { handlerDidError: async ({ request: c }) => self.fallback(c) },
        ],
      }),
      "GET",
    ),
    c.registerRoute(
      /^https?.*\.(?:js|css|woff2?|png|jpg|jpeg|svg|gif|ico)$/i,
      new c.CacheFirst({
        cacheName: "static-assets",
        plugins: [
          new c.ExpirationPlugin({ maxEntries: 120, maxAgeSeconds: 2592e3 }),
          { handlerDidError: async ({ request: c }) => self.fallback(c) },
        ],
      }),
      "GET",
    ),
    c.registerRoute(
      /^https?:\/\/.*\/api\/v1\/.*$/i,
      new c.NetworkFirst({
        cacheName: "api-cache",
        networkTimeoutSeconds: 4,
        plugins: [
          new c.ExpirationPlugin({ maxEntries: 80, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: c }) => self.fallback(c) },
        ],
      }),
      "GET",
    ),
    c.registerRoute(
      /^https?:\/\/.*$/i,
      new c.NetworkFirst({
        cacheName: "pages-cache",
        networkTimeoutSeconds: 4,
        plugins: [
          new c.ExpirationPlugin({ maxEntries: 80, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: c }) => self.fallback(c) },
        ],
      }),
      "GET",
    ));
});
