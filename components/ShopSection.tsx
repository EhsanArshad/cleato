"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  MessageCircle,
  Ruler,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

import { products } from "@/data/products";

function createSlug(brand: string, model: string) {
  return `${brand}-${model}`
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
}

export default function ShopSection() {
  const [search, setSearch] = useState("");
  const [size, setSize] = useState("All Sizes");
  const [condition, setCondition] = useState("All Conditions");
  const [category, setCategory] = useState("All Categories");
  const [sort, setSort] = useState("Featured");

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        searchText === "" ||
        product.brand.toLowerCase().includes(searchText) ||
        product.model.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText) ||
        product.color.toLowerCase().includes(searchText);

      const matchesSize =
        size === "All Sizes" || product.size === size;

      const matchesCondition =
        condition === "All Conditions" ||
        product.condition === condition;

      const matchesCategory =
        category === "All Categories" ||
        product.category === category;

      return (
        matchesSearch &&
        matchesSize &&
        matchesCondition &&
        matchesCategory
      );
    });

    if (sort === "Price: Low to High") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "Price: High to Low") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    if (sort === "Newest") {
      result = [...result].sort((a, b) => b.id - a.id);
    }

    return result;
  }, [search, size, condition, category, sort]);

  const clearFilters = () => {
    setSearch("");
    setSize("All Sizes");
    setCondition("All Conditions");
    setCategory("All Categories");
    setSort("Featured");
  };

  const hasFilters =
    search !== "" ||
    size !== "All Sizes" ||
    condition !== "All Conditions" ||
    category !== "All Categories" ||
    sort !== "Featured";

  return (
    <section
      id="shop"
      className="border-t border-white/10 bg-[#080808] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#22c55e]">
              The CLEATO Shop
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Find your next pair.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-white/40">
              Quality football boots at prices that make sense.
              Search or filter the collection to find your pair.
            </p>
          </div>

          <p className="text-sm font-medium text-white/30">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "boot" : "boots"} found
          </p>
        </div>

        {/* SEARCH */}
        <div className="mt-10">
          <div className="relative">
            <Search
              size={20}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/30"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search boots, brands, categories..."
              className="w-full rounded-2xl border border-white/10 bg-[#101010] py-4 pl-14 pr-12 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#22c55e]/40"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30 transition hover:text-white"
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* FILTERS */}
        <div className="mt-4 rounded-2xl border border-white/10 bg-[#101010] p-4">
          <div className="flex items-center gap-2 text-sm font-bold text-white/70">
            <SlidersHorizontal size={17} />
            Filter Boots
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {/* SIZE */}
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#080808] px-4 py-3 text-sm text-white outline-none focus:border-[#22c55e]/40"
            >
              <option>All Sizes</option>
              <option>UK 8.5</option>
              <option>UK 9</option>
            </select>

            {/* CONDITION */}
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#080808] px-4 py-3 text-sm text-white outline-none focus:border-[#22c55e]/40"
            >
              <option>All Conditions</option>
              <option>Brand New</option>
              <option>New</option>
              <option>Excellent</option>
            </select>

            {/* CATEGORY */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#080808] px-4 py-3 text-sm text-white outline-none focus:border-[#22c55e]/40"
            >
              <option>All Categories</option>
              <option>Control</option>
              <option>Speed</option>
            </select>

            {/* SORT */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#080808] px-4 py-3 text-sm text-white outline-none focus:border-[#22c55e]/40"
            >
              <option>Featured</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* CLEAR */}
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#22c55e] transition hover:text-white"
            >
              <X size={15} />
              Clear filters
            </button>
          )}
        </div>

        {/* PRODUCTS */}
        {filteredProducts.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {filteredProducts.map((product, index) => {
              const slug = createSlug(
                product.brand,
                product.model
              );

              const savings =
                product.originalPrice > product.price
                  ? product.originalPrice - product.price
                  : 0;

              const whatsappMessage = encodeURIComponent(
                `Hi CLEATO, I'm interested in the ${product.brand} ${product.model} in size ${product.size}, listed for PKR ${product.price.toLocaleString()}. Is it still available?`
              );

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <article className="group h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#101010] transition duration-300 hover:-translate-y-1 hover:border-[#22c55e]/30 hover:shadow-2xl hover:shadow-[#22c55e]/5">

                    {/* IMAGE */}
                    <Link
                      href={`/products/${slug}`}
                      className="block"
                    >
                      <div className="relative overflow-hidden bg-[#111111] p-4">

                        {/* CONDITION */}
                        <div className="absolute left-7 top-7 z-10 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                          {product.condition}
                        </div>

                        {/* AVAILABILITY */}
                        {product.available ? (
                          <div className="absolute right-7 top-7 z-10 flex items-center gap-1.5 rounded-full border border-[#22c55e]/20 bg-[#22c55e]/10 px-3 py-1.5 text-xs font-bold text-[#22c55e] backdrop-blur-md">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                            Available
                          </div>
                        ) : (
                          <div className="absolute right-7 top-7 z-10 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-bold text-red-400 backdrop-blur-md">
                            Sold
                          </div>
                        )}

                        <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-[#0b0b0b]">
                          <img
                            src={product.image}
                            alt={`${product.brand} ${product.model}`}
                            className="h-full w-full object-contain p-8 transition duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </Link>

                    {/* INFO */}
                    <div className="p-6">

                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#22c55e]">
                        {product.brand}
                      </p>

                      <Link href={`/products/${slug}`}>
                        <h3 className="mt-2 text-2xl font-black tracking-tight transition hover:text-[#22c55e]">
                          {product.model}
                        </h3>
                      </Link>

                      {/* DETAILS */}
                      <div className="mt-5 flex flex-wrap gap-2">

                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/60">
                          <Ruler size={14} />
                          {product.size}
                        </div>

                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/60">
                          <Check size={14} />
                          {product.condition}
                        </div>

                      </div>

                      {/* PRICE */}
                      <div className="mt-6 flex items-end justify-between gap-4">

                        <div>
                          <p className="text-xs text-white/30">
                            CLEATO Price
                          </p>

                          <p className="mt-1 text-2xl font-black text-[#22c55e]">
                            PKR {product.price.toLocaleString()}
                          </p>

                          {product.originalPrice > product.price && (
                            <p className="mt-1 text-sm text-white/25 line-through">
                              PKR{" "}
                              {product.originalPrice.toLocaleString()}
                            </p>
                          )}
                        </div>

                        {savings > 0 && (
                          <div className="text-right">
                            <p className="text-xs text-white/30">
                              You save
                            </p>

                            <p className="mt-1 text-sm font-bold text-[#22c55e]">
                              PKR {savings.toLocaleString()}
                            </p>
                          </div>
                        )}

                      </div>

                      {/* BUTTONS */}
                      <div className="mt-6 grid grid-cols-2 gap-3">

                        <Link
                          href={`/products/${slug}`}
                          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-bold transition hover:border-[#22c55e]/30 hover:bg-[#22c55e]/10"
                        >
                          View
                          <ArrowRight size={16} />
                        </Link>

                        {product.available ? (
                          <a
                            href={`https://wa.me/923092026986?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 rounded-xl bg-[#22c55e] px-3 py-3 text-sm font-black text-black transition hover:bg-[#16a34a]"
                          >
                            <MessageCircle size={17} />
                            Buy
                          </a>
                        ) : (
                          <div className="flex items-center justify-center rounded-xl bg-white/5 px-3 py-3 text-sm font-bold text-white/25">
                            Sold
                          </div>
                        )}

                      </div>
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* NO RESULTS */
          <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-[#101010] px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/5">
              <Search size={24} className="text-white/30" />
            </div>

            <h3 className="mt-5 text-2xl font-black">
              No boots found
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/40">
              Try changing your search or removing one of the filters.
            </p>

            <button
              onClick={clearFilters}
              className="mt-6 rounded-full bg-[#22c55e] px-6 py-3 text-sm font-black text-black transition hover:bg-[#16a34a]"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* BOTTOM NOTE */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 text-center">
          <p className="text-sm text-white/40">
            Looking for a specific size or model?
            <span className="ml-1 font-semibold text-white/70">
              Contact CLEATO and we'll help you find it.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}