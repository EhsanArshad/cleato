"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

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

export default function Footer() {
  const categories = {
    Featured: [
      "Adidas F50 Elite",
      "Adidas Predator Elite FT",
      "Nike Mercurial Vapor 15",
      "Nike Phantom GX Gripknit",
      "Adidas Predator Freak .1",
      "Adidas Predator Edge Pro",
    ],
    "By Surface": [
      "Firm Ground (FG)",
      "Soft Ground (SG)",
      "Artificial Grass (AG)",
      "Turf (TF)",
    ],
    "By Size": [
      "UK 8",
      "UK 8.5",
      "UK 9",
      "UK 9.5",
      "UK 10",
    ],
    "About & Support": [
      "Sell Your Boots",
      "Our Mission",
      "WhatsApp Support",
      "Instagram @cleato3",
      "Delivery & Inspection",
    ],
  };

  return (
    <footer className="bg-black text-white pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top 4-Column Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-14 border-b border-neutral-800">
          {Object.entries(categories).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-black uppercase tracking-widest text-white">
                {title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => {
                  if (link.includes("Instagram")) {
                    return (
                      <li key={link}>
                        <a
                          href="https://www.instagram.com/cleato3?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-neutral-400 hover:text-white transition flex items-center gap-1.5"
                        >
                          <InstagramIcon size={13} className="text-pink-500" />
                          @cleato3
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={link}>
                      <Link
                        href="/#shop"
                        className="text-xs text-neutral-400 hover:text-white transition"
                      >
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-4">
            <span className="font-black text-white uppercase tracking-wider">
              CLEATO FOOTBALL
            </span>
            <span>© {new Date().getFullYear()} CLEATO. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/cleato3?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition flex items-center gap-1"
            >
              <InstagramIcon size={14} className="text-pink-500" />
              <span>@cleato3</span>
            </a>
            <Link href="/#about" className="hover:text-white transition">Mission</Link>
            <Link href="/#sell" className="hover:text-white transition">Trade-In</Link>
            <a
              href="https://wa.me/923092026986"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition flex items-center gap-1"
            >
              <MessageCircle size={14} className="text-emerald-500" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
