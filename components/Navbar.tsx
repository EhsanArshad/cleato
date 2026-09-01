"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

function InstagramIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-neutral-200">
      {/* Top micro announcement bar */}
      <div className="bg-[#f5f5f5] text-[11px] font-bold text-neutral-700 px-6 py-2 flex justify-between items-center border-b border-neutral-200/70">
        <span className="tracking-wider flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
          CLEATO FOOTBALL · WE BUY & SELL BRAND NEW & PRE-OWNED BOOTS
        </span>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/cleato3?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition flex items-center gap-1 text-neutral-800"
          >
            <InstagramIcon size={13} className="text-pink-600" />
            <span>@cleato3</span>
          </a>
          <span className="text-neutral-300">|</span>
          <Link href="/#sell" className="hover:text-black transition">
            Sell / Trade Boots
          </Link>
          <span className="text-neutral-300">|</span>
          <a
            href="https://wa.me/923092026986"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition flex items-center gap-1"
          >
            WhatsApp Support
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5">
          <span className="text-2xl font-black tracking-tighter uppercase">
            CLEATO<span className="text-emerald-600">.</span>
          </span>
        </Link>

        {/* Center Categories */}
        <div className="hidden lg:flex items-center gap-7 text-xs font-bold tracking-wider uppercase">
          <Link
            href="/#shop"
            className="text-neutral-800 hover:text-black transition py-4 border-b-2 border-transparent hover:border-black"
          >
            All Boots
          </Link>
          <Link
            href="/collections/speed"
            className="text-neutral-800 hover:text-black transition py-4 border-b-2 border-transparent hover:border-black"
          >
            Speed (F50 / Mercurial)
          </Link>
          <Link
            href="/collections/control"
            className="text-neutral-800 hover:text-black transition py-4 border-b-2 border-transparent hover:border-black"
          >
            Control (Predator / Phantom)
          </Link>
          <Link
            href="/#accessories"
            className="text-neutral-800 hover:text-black transition py-4 border-b-2 border-transparent hover:border-black"
          >
            Accessories
          </Link>
          <Link
            href="/#sell"
            className="text-emerald-700 hover:text-emerald-900 transition py-4 border-b-2 border-transparent hover:border-emerald-700"
          >
            Sell Your Boots
          </Link>
          <Link
            href="/#about"
            className="text-neutral-800 hover:text-black transition py-4 border-b-2 border-transparent hover:border-black"
          >
            Our Mission
          </Link>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/cleato3?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 rounded-full border border-neutral-300 px-4 py-2 text-xs font-bold text-neutral-800 hover:border-black transition"
          >
            <InstagramIcon size={14} className="text-pink-600" />
            <span>Instagram</span>
          </a>

          <Link
            href="/#shop"
            className="rounded-full bg-black px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-neutral-800 transition"
          >
            Shop Droplist
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-black hover:bg-neutral-100 rounded-lg transition"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white px-6 py-6 space-y-4 text-sm font-bold uppercase tracking-wider">
          <Link
            href="/#shop"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-900 border-b border-neutral-100"
          >
            All Boots
          </Link>
          <Link
            href="/collections/speed"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-900 border-b border-neutral-100"
          >
            Speed (F50 / Mercurial)
          </Link>
          <Link
            href="/collections/control"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-900 border-b border-neutral-100"
          >
            Control (Predator / Phantom)
          </Link>
          <Link
            href="/#accessories"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-900 border-b border-neutral-100"
          >
            Accessories & Gear
          </Link>
          <Link
            href="/#sell"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-emerald-700 border-b border-neutral-100"
          >
            Sell / Trade Your Boots
          </Link>
          <Link
            href="/#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-neutral-900 border-b border-neutral-100"
          >
            Our Mission
          </Link>
          <a
            href="https://www.instagram.com/cleato3?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2 text-neutral-900"
          >
            <InstagramIcon size={16} className="text-pink-600" />
            <span>Follow @cleato3 on Instagram</span>
          </a>
        </div>
      )}
    </header>
  );
}
