"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const product = products.find((item) => {
    const productSlug = `${item.brand}-${item.model}`
      .toLowerCase()
      .replace(/\s+/g, "-");

    return (
      productSlug === slug ||
      item.slug === slug ||
      item.model.toLowerCase().replace(/\s+/g, "-") === slug
    );
  });

  if (!product) {
    return (
      <main className="min-h-screen bg-white text-black flex flex-col justify-between">
        <Navbar />
        <div className="text-center py-32 px-6">
          <h1 className="text-4xl font-black uppercase">Product Not Found</h1>
          <p className="mt-4 text-sm text-neutral-500">
            This pair may have been sold or moved.
          </p>
          <Link
            href="/#shop"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-xs font-black uppercase tracking-wider text-white hover:bg-neutral-800 transition"
          >
            <ArrowLeft size={16} /> Back to Shop
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const savings = product.originalPrice - product.price;
  const waMessage = encodeURIComponent(
    `Hi CLEATO, I want to purchase the ${product.brand} ${product.model} (${product.condition}) in size ${product.size}, listed for PKR ${product.price.toLocaleString()}. Is it still available?`
  );

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <Link
          href="/#shop"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-black transition mb-8"
        >
          <ArrowLeft size={14} /> Back to Droplist
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Product Image Box with perfect object-contain framing */}
          <div className="lg:col-span-7 bg-[#f5f5f5] p-6 sm:p-12 border border-neutral-200 rounded-sm">
            <div className="relative aspect-square w-full flex items-center justify-center">
              <span className="absolute top-0 left-0 bg-black text-white px-3 py-1.5 text-xs font-black uppercase tracking-wider">
                {product.condition}
              </span>
              <img
                src={product.image}
                alt={`${product.brand} ${product.model}`}
                className="h-full w-full object-contain max-h-[480px]"
              />
            </div>
          </div>

          {/* Right: Product Details & Purchase */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
                {product.brand} · {product.category} Boots
              </span>

              <h1 className="mt-2 text-3xl sm:text-4xl font-black uppercase tracking-tight text-black leading-tight">
                {product.model}
              </h1>

              <div className="mt-6 flex items-baseline gap-3 pb-6 border-b border-neutral-200">
                <span className="text-3xl font-black text-black">
                  PKR {product.price.toLocaleString()}
                </span>
                <span className="text-sm font-medium text-neutral-400 line-through">
                  PKR {product.originalPrice.toLocaleString()}
                </span>
                <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                  Save PKR {savings.toLocaleString()}
                </span>
              </div>

              {/* Specifications */}
              <div className="mt-6 space-y-3">
                <div className="flex justify-between py-2 border-b border-neutral-100 text-xs">
                  <span className="font-bold text-neutral-500 uppercase">Size</span>
                  <span className="font-black text-black">{product.size}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-100 text-xs">
                  <span className="font-bold text-neutral-500 uppercase">Condition</span>
                  <span className="font-black text-black">{product.condition} ({product.conditionScore}/10)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-100 text-xs">
                  <span className="font-bold text-neutral-500 uppercase">Category</span>
                  <span className="font-black text-black">{product.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-100 text-xs">
                  <span className="font-bold text-neutral-500 uppercase">Colorway</span>
                  <span className="font-black text-black">{product.color}</span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-black uppercase tracking-wider text-neutral-500 mb-2">
                  Player Description & Inspection Notes
                </h4>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 space-y-3">
              <a
                href={`https://wa.me/923092026986?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-black py-4 text-xs font-black uppercase tracking-widest text-white hover:bg-neutral-800 transition shadow-sm"
              >
                <MessageCircle size={16} /> Order / Inquire on WhatsApp
              </a>

              <p className="text-center text-[11px] text-neutral-400">
                Safe delivery across Pakistan · Inspection before payment
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
