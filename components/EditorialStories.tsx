"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EditorialStories() {
  return (
    <section className="py-16 bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-neutral-500">
              Editorial Spotlight
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              HARD IN THE PITCH
            </h2>
          </div>
          <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
            Explore dedicated droplists by playstyle
          </p>
        </div>

        {/* 2-Tile High-Impact Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tile 1: Pure Speed -> /collections/speed */}
          <Link
            href="/collections/speed"
            className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-neutral-900 block"
          >
            <img
              src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1000&auto=format&fit=crop"
              alt="Speed Cleats"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                Pure Speed Droplist
              </span>
              <h3 className="mt-1 text-3xl md:text-4xl font-black uppercase tracking-tight leading-none group-hover:text-emerald-300 transition">
                LIGHT THEM UP.
              </h3>
              <p className="mt-2 text-xs md:text-sm text-neutral-300 max-w-sm">
                Built for explosive pace and lightning acceleration. Explore dedicated new & pre-owned Adidas F50 and Nike Mercurial models.
              </p>
              <div className="mt-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-black uppercase tracking-wider text-black group-hover:bg-neutral-200 transition">
                  Shop Speed Collection <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>

          {/* Tile 2: Total Dominance -> /collections/control */}
          <Link
            href="/collections/control"
            className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-neutral-900 block"
          >
            <img
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop"
              alt="Control Cleats"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                Total Dominance Droplist
              </span>
              <h3 className="mt-1 text-3xl md:text-4xl font-black uppercase tracking-tight leading-none group-hover:text-emerald-300 transition">
                TOTAL DOMINANCE.
              </h3>
              <p className="mt-2 text-xs md:text-sm text-neutral-300 max-w-sm">
                Precision swerve, rubber strikes, and match-winning grip with the dedicated Adidas Predator, Phantom GX, and Copa lineup.
              </p>
              <div className="mt-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-black uppercase tracking-wider text-black group-hover:bg-neutral-200 transition">
                  Shop Control Collection <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
