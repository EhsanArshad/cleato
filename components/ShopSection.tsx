"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MessageCircle, ArrowRight } from "lucide-react";
import { products } from "@/data/products";

interface ShopSectionProps {
  selectedFilter: string;
  onSelectFilter: (filter: string) => void;
}

export default function ShopSection({ selectedFilter, onSelectFilter }: ShopSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.condition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.size.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedFilter === "All") return true;
    if (selectedFilter === "Speed") return product.category === "Speed";
    if (selectedFilter === "Control") return product.category === "Control";
    if (selectedFilter === "Pre-Owned") return product.condition.includes("Pre-Owned") || product.condition.includes("Used");
    if (selectedFilter === "Brand New") return product.condition.includes("Brand New") || product.condition.includes("New");
    if (selectedFilter === "UK 9") return product.size.includes("9");
    if (selectedFilter === "UK 8.5") return product.size.includes("8.5");

    return true;
  });

  return (
    <section id="shop" className="py-20 bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-neutral-200">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-neutral-500">
              The Droplist
            </span>
            <h2 className="mt-1 text-3xl md:text-5xl font-black uppercase tracking-tight">
              {selectedFilter === "Speed"
                ? "SPEED BOOTS (F50 & MERCURIAL)"
                : selectedFilter === "Control"
                ? "CONTROL BOOTS (PREDATOR & PHANTOM)"
                : selectedFilter === "Pre-Owned"
                ? "PRE-OWNED (USED) DROPS"
                : "LATEST BOOTS IN STOCK"}
            </h2>
            <p className="mt-2 text-sm text-neutral-500 max-w-lg">
              New and certified pre-owned football boots inspected for genuine player performance.
            </p>
          </div>
          <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
            {filteredProducts.length} Pair{filteredProducts.length === 1 ? "" : "s"} In Stock
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Chips */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {[
              { label: "All Boots", value: "All" },
              { label: "Speed (F50 / Mercurial)", value: "Speed" },
              { label: "Control (Predator / Phantom)", value: "Control" },
              { label: "Pre-Owned (Used)", value: "Pre-Owned" },
              { label: "Brand New", value: "Brand New" },
              { label: "UK 8.5", value: "UK 8.5" },
              { label: "UK 9", value: "UK 9" },
            ].map((chip) => (
              <button
                key={chip.value}
                onClick={() => onSelectFilter(chip.value)}
                className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition whitespace-nowrap ${
                  selectedFilter === chip.value
                    ? "bg-black text-white"
                    : "bg-[#f5f5f5] text-neutral-800 hover:bg-neutral-200"
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search boots, sizes, models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-neutral-200 bg-[#f7f7f7] py-2.5 pl-10 pr-4 text-xs font-medium text-black placeholder:text-neutral-400 outline-none focus:border-black"
            />
          </div>
        </div>

        {/* Product Cards Grid - Perfect Framing with object-contain */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const savings = product.originalPrice - product.price;
            const waMessage = encodeURIComponent(
              `Hi CLEATO, I want to purchase the ${product.brand} ${product.model} (${product.condition}) in size ${product.size}, listed for PKR ${product.price.toLocaleString()}. Is it still available?`
            );

            const isUsed = product.condition.includes("Pre-Owned") || product.condition.includes("Used");

            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between border border-neutral-200/80 bg-white p-4 transition-all hover:border-black shadow-sm"
              >
                {/* Product Image Frame: Beautifully centered, fully visible, fits frame cleanly */}
                <Link
                  href={`/products/${product.slug}`}
                  className="relative aspect-square w-full overflow-hidden bg-[#f5f5f5] flex items-center justify-center p-4 sm:p-6 rounded-sm"
                >
                  <span
                    className={`absolute top-3 left-3 z-10 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${
                      isUsed
                        ? "bg-amber-600 text-white"
                        : "bg-black text-white"
                    }`}
                  >
                    {product.condition}
                  </span>

                  <img
                    src={product.image}
                    alt={`${product.brand} ${product.model}`}
                    className="h-full w-full object-contain max-h-[240px] transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* Product Info */}
                <div className="pt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                        {product.brand} · {product.category}
                      </span>
                      <span className="text-xs font-black text-neutral-900">
                        Size {product.size}
                      </span>
                    </div>

                    <Link href={`/products/${product.slug}`}>
                      <h3 className="mt-1 text-base font-black uppercase tracking-tight text-neutral-900 group-hover:text-neutral-600 transition">
                        {product.model}
                      </h3>
                    </Link>

                    <p className="mt-2 text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="mt-4 pt-3 border-t border-neutral-100">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-lg font-black text-black">
                        PKR {product.price.toLocaleString()}
                      </span>
                      <span className="text-xs font-medium text-neutral-400 line-through">
                        PKR {product.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Save PKR {savings.toLocaleString()}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <a
                        href={`https://wa.me/923092026986?text=${waMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 rounded-full bg-black py-2.5 text-[11px] font-black uppercase tracking-wider text-white hover:bg-neutral-800 transition"
                      >
                        <MessageCircle size={13} /> Buy
                      </a>
                      <Link
                        href={`/products/${product.slug}`}
                        className="flex items-center justify-center gap-1 rounded-full border border-neutral-300 py-2.5 text-[11px] font-black uppercase tracking-wider text-black hover:border-black transition"
                      >
                        Details <ArrowRight size={12} />
                      </Link>
                    </div>
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
