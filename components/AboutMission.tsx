"use client";

import Link from "next/link";
import { ShieldCheck, ArrowRight, Zap, RefreshCw, MessageCircle } from "lucide-react";

function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function AboutMission() {
  return (
    <section id="about" className="py-20 bg-[#f7f7f7] border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
            Our Mission Statement
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-tight">
            FOOTBALL BOOTS SHOULD BE EASIER TO AFFORD.
          </h2>
          <p className="mt-6 text-base sm:text-xl font-bold text-neutral-800 leading-relaxed border-l-4 border-black pl-5">
            "Buy quality boots without breaking the bank, or turn your unused pair into cash. With CLEATO, everyone gets more value from every boot."
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-2xl font-black text-neutral-300 font-mono">01</span>
              <h3 className="mt-4 text-lg font-black uppercase tracking-tight">
                New & Pre-Owned Tested
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Every pair is thoroughly checked for stud wear, upper integrity, and internal cushioning so you step on the pitch with confidence.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-2xl font-black text-neutral-300 font-mono">02</span>
              <h3 className="mt-4 text-lg font-black uppercase tracking-tight">
                Turn Boots Into Cash
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Instead of letting good boots sit unused, CLEATO gives sellers a direct way to pass them on to another footballer and get paid fast.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-2xl font-black text-neutral-300 font-mono">03</span>
              <h3 className="mt-4 text-lg font-black uppercase tracking-tight">
                Direct WhatsApp & Instagram
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                No middleman delays. Chat directly with us on WhatsApp or Instagram (@cleato3), inspect video proofs, and arrange safe cash-on-delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Social Connect Strip */}
        <div className="mt-10 bg-white border border-neutral-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600">
              <InstagramIcon size={20} />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-tight">Follow CLEATO on Instagram</h4>
              <p className="text-xs text-neutral-500">Catch the latest droplists, matchday clips, and player reviews.</p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/cleato3?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-6 py-2.5 text-xs font-black uppercase tracking-wider text-white hover:bg-neutral-800 transition"
          >
            Follow @cleato3 →
          </a>
        </div>
      </div>
    </section>
  );
}
