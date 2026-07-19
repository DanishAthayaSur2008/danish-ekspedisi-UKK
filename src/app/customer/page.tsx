"use client";

import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { CustomerNavbarShell } from "@/components/customer/customer-navbar-shell";
import { RateSection } from "@/components/public/rate-section";
import { CustomerTracker } from "@/components/customer/customer-tracker";
import { CtaSection } from "@/components/public/cta-section";
import { PublicFooter } from "@/components/layout/public-footer";
import { getCurrentUser } from "@/lib/auth-client";

export default function CustomerHomePage() {
  const [user, setUser] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    let mounted = true;
    getCurrentUser()
      .then((res) => {
        if (mounted) setUser(res.data as Record<string, unknown>);
      })
      .catch(() => null);
    return () => {
      mounted = false;
    };
  }, []);

  const customerName = user?.name
    ? String(user.name)
    : user?.email
      ? String(user.email).split("@")[0]
      : "Customer";

  return (
    <CustomerNavbarShell fullWidth>
      {/* 1. HERO SECTION */}
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden w-full flex items-center justify-start bg-black min-h-[calc(100vh-64px)] border-b-4 border-white">
        {/* Background Image & Overlay Stark Kontras */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/BG.png"
            alt="Shipping port with containers"
            fill
            priority
            className="object-cover object-center filter grayscale contrast-125"
          />
          {/* Overlay gelap pekat khas brutalism untuk mempertahankan keterbacaan teks */}
          <div className="absolute inset-0 bg-black/85" />
        </div>

        {/* Kontainer Utama Content */}
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10 flex items-center z-10">
          <div className="max-w-3xl w-full text-left">
            {/* Badge Penanda - Kotak Tegas & Kaku */}
            <div className="inline-block px-4 py-1.5 bg-orange-500 text-black font-space text-xs sm:text-sm font-black uppercase tracking-wider border-2 border-white shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] mb-8">
              PANEL PELANGGAN // DANISH EKSPEDISI
            </div>

            {/* Typography Bold & Tegas */}
            <h1 className="font-space text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl uppercase">
              Halo,{" "}
              <span className="bg-orange-500 text-black px-3 py-1 inline-block border-2 border-white transform -rotate-1">
                {customerName}
              </span>
              <br />
              <span className="text-white mt-4 block text-2xl sm:text-3xl lg:text-4xl font-bold tracking-normal normal-case">
                Mau kirim atau cek posisi paket Anda hari ini?
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg border-l-4 border-orange-500 pl-4 font-medium">
              Kirim kargo dan pantau barang jadi lebih mudah dan praktis. Mulai
              dari bikin pesanan baru, lacak lokasi paket secara langsung,
              sampai bayar tagihan, semuanya bisa Anda lakukan online di satu
              tempat.
            </p>

            {/* Sesi Tombol Aksi - Karakter Utama Neo-Brutalism (Hard Flat Shadows) */}
            <div className="mt-12 flex flex-col items-stretch justify-start gap-6 sm:flex-row sm:items-center">
              {/* Tombol Utama: Kirim Paket Baru */}
              <Button
                asChild
                size="lg"
                className="bg-orange-500 text-black hover:bg-orange-400 border-2 border-white rounded-none font-space font-black text-lg shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none h-14 px-8"
              >
                <Link href="/customer/buat-pesanan">
                  KIRIM PAKET BARU
                  <ArrowRight className="ml-2 h-5 w-5 stroke-[3]" />
                </Link>
              </Button>

              {/* Tombol Kedua: Cek Lokasi Paket */}
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-slate-100 border-2 border-black rounded-none font-space font-black text-lg shadow-[4px_4px_0px_0px_#f59e0b] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none h-14 px-8"
              >
                <Link href="/customer/lacak-paket">
                  <Search className="mr-2 h-5 w-5 stroke-[3]" />
                  CEK LOKASI PAKET
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RATE CHECKER */}
      <RateSection />

      {/* 3. PACKAGE TRACKER LIST */}
      <CustomerTracker />

      {/* 4. CTA SECTION */}
      <CtaSection
        primaryLink="/customer/buat-pesanan"
        primaryText="Buat Pesanan Sekarang"
        secondaryLink="/customer/lacak-paket"
        secondaryText="Cari Paket"
      />

      {/* 5. FOOTER */}
      <PublicFooter />
    </CustomerNavbarShell>
  );
}