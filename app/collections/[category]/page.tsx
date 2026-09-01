"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, MessageCircle, ArrowRight, Search } from "lucide-react";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CollectionPage() {
  const params = useParams();
  const categoryParam = ((params?.category as string) || "").toLowerCase();

  const [selectedCondition, setSelectedCondition] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const isSpeed = categoryParam === "speed";

  const collectionInfo = useMemo(() => {
    if (isSpeed) {
      return {
        title: "SPEED COLLECTION",
        subtitle: "LIGHT THEM UP",
        description:
          "Engineered for pure pace, explosive sprints, and featherlight feel. Explore our lineup of new and pre-owned Adidas F50 and Nike Mercurial boots.",
        bgImage:
          "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1920&auto=format&fit=crop",
        badge: "Fastest Boots on the Pitch",
      };
    }
    return {
      title: "CONTROL COLLECTION",
      subtitle: "TOTAL DOMINANCE",
      description:
        "Precision grip, rubber strikes, and match-winning control. Explore certified new and pre-owned Adidas Predator and Nike Phantom GX models.",
      bgImage:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1920&auto=format&fit=crop",
      badge: "Master the Ball",
    };
  }, [isSpeed]);

  const collectionProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = isSpeed
        ? p.category === "Speed" || p.model.toLowerCase().includes("f50") || p.model.toLowerCase().includes("mercurial")
        : p.category === "Control" || p.model.toLowerCase().includes("predator") || p.model.toLowerCase().includes("phantom");

      if (!matchesCategory) return false;

      const matchesSearch =
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.size.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (selectedCondition === "All") return true;
      if (selectedCondition === "Brand New") return p.condition.includes("Brand New");
      if (selectedCondition === "Pre-Owned") return p.condition.includes("Pre-Owned") || p.condition.includes("Used") || p.condition.includes("Excellent");

      return true;
    });
  }, [isSpeed, searchQuery, selectedCondition]);

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* High-Impact Editorial Hero */}
      <section className="relative w-full bg-neutral-900 border-b border-neutral-200 overflow-hidden">
        <div className="relative aspect-[16/8] md:aspect-[21/8] w-full">
          <img
            src={collectionInfo.bgImage}
            alt={collectionInfo.title}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-14 text-white">
            <div className="mx-auto max-w-7xl w-full">
              <Link
                href="/#shop"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition mb-3"
              >
                <ArrowLeft size={14} /> Back to All Boots
              </Link>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black uppercase tracking-widest text-emerald-400">
                  {collectionInfo.badge}
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mt-1">
                {collectionInfo.title}
              </h1>
              <p className="mt-3 max-w-2xl text-xs sm:text-sm text-neutral-200 leading-relaxed">
                {collectionInfo.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Droplist Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-neutral-200">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-neutral-500">
                Curated Lineup
              </span>
              <h2 className="mt-1 text-2xl md:text-4xl font-black uppercase tracking-tight">
                {isSpeed ? "F50 & Mercurial Droplist" : "Predator & Control Droplist"}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {["All", "Brand New", "Pre-Owned"].map((cond) => (
                <button
                  key={cond}
                  onClick={() => setSelectedCondition(cond)}
                  className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition ${
                    selectedCondition === cond
                      ? "bg-black text-white"
                      : "bg-[#f5f5f5] text-neutral-800 hover:bg-neutral-200"
                  }`}
                >
                  {cond}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar inside category */}
          <div className="mt-6 flex justify-between items-center">
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
              {collectionProducts.length} Pair{collectionProducts.length === 1 ? "" : "s"} Available
            </p>

            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search models in this collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-neutral-200 bg-[#f7f7f7] py-2 pl-9 pr-4 text-xs font-medium text-black placeholder:text-neutral-400 outline-none focus:border-black"
              />
            </div>
          </div>

          {/* Products Grid - Clean Framing with object-contain */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {collectionProducts.map((product) => {
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
                  {/* Clean Framed Image */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="relative aspect-square w-full overflow-hidden bg-[#f5f5f5] flex items-center justify-center p-4 sm:p-6 rounded-sm"
                  >
                    <span
                      className={`absolute top-3 left-3 z-10 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${
                        isUsed ? "bg-amber-600 text-white" : "bg-black text-white"
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

                  {/* Info */}
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

                    {/* Price */}
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

          {/* Switch Category Banner */}
          <div className="mt-16 bg-[#f7f7f7] border border-neutral-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-neutral-500">
                Switch Playstyle
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight mt-1">
                {isSpeed ? "Looking for Grip & Control?" : "Looking for Pure Acceleration?"}
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                {isSpeed
                  ? "Explore the Predator & Phantom GX Control Collection."
                  : "Explore the Adidas F50 & Nike Mercurial Speed Collection."}
              </p>
            </div>

            <Link
              href={isSpeed ? "/collections/control" : "/collections/speed"}
              className="rounded-full bg-black px-7 py-3 text-xs font-black uppercase tracking-wider text-white hover:bg-neutral-800 transition whitespace-nowrap"
            >
              {isSpeed ? "View Control Collection →" : "View Speed Collection →"}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
