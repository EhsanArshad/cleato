"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Tag, RefreshCw } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative w-full bg-[#f7f7f7] border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8 pb-14">
        {/* Main High-Impact Editorial Billboard */}
        <div className="relative aspect-[16/10] md:aspect-[21/9] w-full overflow-hidden bg-black">
          <img
            src="https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1920&auto=format&fit=crop"
            alt="Football Pitch"
            className="h-full w-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-sm">
                New & Pre-Owned Boots
              </span>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                Season 2026 Collection
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-[0.92]">
              SHOW THEM <br /> WHERE YOU STAND.
            </h1>

            <p className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base font-medium text-neutral-200 leading-relaxed">
              Buy quality boots without breaking the bank, or turn your unused pair into cash. With CLEATO, everyone gets more value from every boot.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/#shop"
                className="rounded-full bg-white px-7 py-3 text-xs md:text-sm font-black uppercase tracking-wider text-black hover:bg-neutral-200 transition"
              >
                Shop Collection
              </Link>
              <Link
                href="/#sell"
                className="rounded-full border border-white/50 bg-black/40 backdrop-blur-sm px-7 py-3 text-xs md:text-sm font-black uppercase tracking-wider text-white hover:bg-white hover:text-black transition"
              >
                Sell Your Boots
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Collections Ticker Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-xs text-neutral-600">
          <div className="flex items-center gap-3 font-bold uppercase tracking-wider flex-wrap">
            <span className="text-neutral-400">Dedicated Lines:</span>
            <Link
              href="/collections/speed"
              className="text-black font-extrabold hover:underline underline-offset-4"
            >
              F50 & Speed Collection →
            </Link>
            <span>·</span>
            <Link
              href="/collections/control"
              className="text-black font-extrabold hover:underline underline-offset-4"
            >
              Predator & Control Collection →
            </Link>
          </div>

          <div className="flex items-center gap-6 font-semibold">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-emerald-600" />
              100% Condition Checked
            </div>
            <div className="flex items-center gap-1.5">
              <RefreshCw size={14} className="text-emerald-600" />
              We Buy & Sell Boots
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
