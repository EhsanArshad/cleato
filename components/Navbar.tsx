"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

const links = [
  { name: "Home", href: "#top" },
  { name: "Shop", href: "#shop" },
  { name: "Sell Your Boots", href: "#sell" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#080808]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}
        <a
          href="#top"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#22c55e] transition duration-300 group-hover:scale-105">
            <span className="text-xl font-black text-black">
              C
            </span>
          </div>

          <span className="text-2xl font-black tracking-tight">
            CLEATO
            <span className="text-[#22c55e]">.</span>
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-semibold text-white/60 transition hover:text-white"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#22c55e] transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </div>

        {/* DESKTOP SHOP BUTTON */}
        <a
          href="#shop"
          className="hidden items-center gap-2 rounded-full bg-[#22c55e] px-5 py-2.5 text-sm font-black text-black transition duration-300 hover:bg-[#16a34a] hover:scale-[1.02] md:flex"
        >
          <ShoppingBag size={16} />
          Shop Boots
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 transition hover:border-[#22c55e]/30 hover:bg-[#22c55e]/10 md:hidden"
        >
          {open ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-white/10 bg-[#080808] px-6 py-6 shadow-2xl md:hidden">

          <div className="flex flex-col gap-2">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold text-white/70 transition hover:bg-white/[0.04] hover:text-[#22c55e]"
              >
                {link.name}

                <ArrowRight
                  size={16}
                  className="text-white/20"
                />
              </a>
            ))}

            <div className="my-2 h-px bg-white/10" />

            <a
              href="#shop"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#22c55e] px-5 py-3.5 text-sm font-black text-black transition hover:bg-[#16a34a]"
            >
              <ShoppingBag size={18} />
              Shop Boots
            </a>

          </div>
        </div>
      )}
    </header>
  );
}