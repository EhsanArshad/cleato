"use client";

import { MessageCircle, ShoppingBag, Check } from "lucide-react";
import { accessories } from "@/data/accessories";

export default function AccessoriesSection() {
  return (
    <section id="accessories" className="py-20 bg-[#f7f7f7] border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-neutral-200">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
              Matchday Essentials
            </span>
            <h2 className="mt-1 text-3xl md:text-5xl font-black uppercase tracking-tight">
              FOOTBALL ACCESSORIES
            </h2>
            <p className="mt-2 text-sm text-neutral-500 max-w-lg">
              Must-have gear to pair with your boots: warmup bands, anti-slip grip socks, and ultra-light shinguards.
            </p>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
            3 High-Demand Essentials
          </span>
        </div>

        {/* 3-Column Accessories Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {accessories.map((item) => {
            const savings = item.originalPrice - item.price;
            const waMessage = encodeURIComponent(
              `Hi CLEATO, I want to order the ${item.name} for PKR ${item.price.toLocaleString()}. Is it available?`
            );

            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:border-black"
              >
                {/* Accessory Image with clean object-contain framing */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#f5f5f5] flex items-center justify-center p-6 rounded-sm">
                  <span className="absolute top-3 left-3 z-10 bg-black text-white px-2.5 py-1 text-[10px] font-black uppercase tracking-wider">
                    {item.tag}
                  </span>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain max-h-[260px] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="pt-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-700">
                      {item.category}
                    </span>

                    <h3 className="mt-1 text-lg font-black uppercase tracking-tight text-neutral-900 leading-snug">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Action */}
                  <div className="mt-5 pt-4 border-t border-neutral-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-black">
                        PKR {item.price.toLocaleString()}
                      </span>
                      <span className="text-xs font-medium text-neutral-400 line-through">
                        PKR {item.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Save PKR {savings.toLocaleString()}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/923092026986?text=${waMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full flex items-center justify-center gap-2 rounded-full bg-black py-3 text-xs font-black uppercase tracking-wider text-white hover:bg-neutral-800 transition"
                    >
                      <MessageCircle size={15} /> Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
