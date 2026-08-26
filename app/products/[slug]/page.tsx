"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Check,
  MessageCircle,
  ShieldCheck,
  Tag,
  Ruler,
} from "lucide-react";

import { products } from "@/data/products";

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const product = products.find((item) => {
    const productSlug = `${item.brand}-${item.model}`
      .toLowerCase()
      .replace(/\s+/g, "-");

    return (
      productSlug === slug ||
      item.model.toLowerCase().replace(/\s+/g, "-") === slug
    );
  });

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#080808] px-6 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-black">
            Product Not Available
          </h1>

          <p className="mt-4 text-white/50">
            We couldn't find the football boots you're looking for.
          </p>

          <Link
            href="/#shop"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-6 py-3 font-bold text-black transition hover:bg-[#16a34a]"
          >
            <ArrowLeft size={18} />
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hi CLEATO, I'm interested in the ${product.brand} ${product.model} in size ${product.size}, listed for PKR ${product.price.toLocaleString()}. Is it still available?`
  );

  const discount =
    product.originalPrice > product.price
      ? product.originalPrice - product.price
      : 0;

  return (
    <main className="min-h-screen bg-[#080808] text-white">

      {/* HEADER */}
      <header className="border-b border-white/10 bg-[#080808]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#22c55e]">
              <span className="text-xl font-black text-black">
                C
              </span>
            </div>

            <span className="text-2xl font-black tracking-tight">
              CLEATO<span className="text-[#22c55e]">.</span>
            </span>
          </Link>

          <Link
            href="/#shop"
            className="flex items-center gap-2 text-sm font-bold text-white/60 transition hover:text-[#22c55e]"
          >
            <ArrowLeft size={17} />
            Back to Shop
          </Link>

        </div>
      </header>

      {/* PRODUCT SECTION */}
      <section className="px-6 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* PRODUCT IMAGE */}
            <div>

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-6 shadow-2xl">

                {/* CONDITION BADGE */}
                <div className="absolute left-8 top-8 z-10 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                  {product.condition}
                </div>

                {/* AVAILABILITY BADGE */}
                {product.available ? (
                  <div className="absolute right-8 top-8 z-10 flex items-center gap-2 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 px-4 py-2 text-xs font-bold text-[#22c55e] backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
                    Available
                  </div>
                ) : (
                  <div className="absolute right-8 top-8 z-10 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-bold text-red-400 backdrop-blur-md">
                    Sold
                  </div>
                )}

                <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#0b0b0b]">

                  <img
                    src={product.image}
                    alt={`${product.brand} ${product.model}`}
                    className="h-full w-full object-contain p-10"
                  />

                </div>
              </div>

              <p className="mt-4 text-center text-sm text-white/30">
                Product image shows the available pair.
              </p>

            </div>

            {/* PRODUCT INFORMATION */}
            <div>

              {/* CATEGORY */}
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#22c55e]">
                {product.category} Football Boots
              </p>

              {/* TITLE */}
              <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
                {product.brand} {product.model}
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-6 max-w-xl text-base leading-8 text-white/50">
                {product.description}
              </p>

              {/* PRICE */}
              <div className="mt-8 flex flex-wrap items-end gap-5">

                <div>
                  <p className="text-sm text-white/30">
                    CLEATO Price
                  </p>

                  <p className="mt-1 text-4xl font-black text-[#22c55e]">
                    PKR {product.price.toLocaleString()}
                  </p>
                </div>

                {product.originalPrice > product.price && (
                  <div className="pb-1">

                    <p className="text-lg text-white/30 line-through">
                      PKR {product.originalPrice.toLocaleString()}
                    </p>

                    <p className="text-sm font-bold text-[#22c55e]">
                      Save PKR {discount.toLocaleString()}
                    </p>

                  </div>
                )}

              </div>

              {/* PRODUCT DETAILS */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {/* SIZE */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <div className="flex items-center gap-3">

                    <Ruler
                      size={20}
                      className="text-[#22c55e]"
                    />

                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/30">
                        Size
                      </p>

                      <p className="mt-1 font-bold">
                        {product.size}
                      </p>
                    </div>

                  </div>

                </div>

                {/* CONDITION */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <div className="flex items-center gap-3">

                    <ShieldCheck
                      size={20}
                      className="text-[#22c55e]"
                    />

                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/30">
                        Condition
                      </p>

                      <p className="mt-1 font-bold">
                        {product.condition}
                      </p>
                    </div>

                  </div>

                </div>

                {/* CATEGORY */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <div className="flex items-center gap-3">

                    <Tag
                      size={20}
                      className="text-[#22c55e]"
                    />

                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/30">
                        Category
                      </p>

                      <p className="mt-1 font-bold">
                        {product.category}
                      </p>
                    </div>

                  </div>

                </div>

                {/* COLOR */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                  <div className="flex items-center gap-3">

                    <Check
                      size={20}
                      className="text-[#22c55e]"
                    />

                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/30">
                        Color
                      </p>

                      <p className="mt-1 font-bold">
                        {product.color}
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              {/* CONDITION SCORE */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/30">
                      Condition Rating
                    </p>

                    <p className="mt-1 font-bold">
                      {product.condition}
                    </p>
                  </div>

                  <div className="text-right">

                    <p className="text-2xl font-black text-[#22c55e]">
                      {product.conditionScore}/10
                    </p>

                  </div>

                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">

                  <div
                    className="h-full rounded-full bg-[#22c55e]"
                    style={{
                      width: `${product.conditionScore * 10}%`,
                    }}
                  />

                </div>

              </div>

              {/* WHATSAPP BUY BUTTON */}
              {product.available ? (
                <a
                  href={`https://wa.me/92309026986?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-[#22c55e] px-7 py-4 text-base font-black text-black transition hover:bg-[#16a34a]"
                >
                  <MessageCircle size={20} />
                  Buy / Ask About This Boot
                </a>
              ) : (
                <div className="mt-8 rounded-full bg-white/10 px-7 py-4 text-center font-bold text-white/40">
                  Currently Unavailable
                </div>
              )}

              <p className="mt-4 text-center text-xs leading-5 text-white/30">
                Message CLEATO on WhatsApp to confirm availability,
                delivery and payment details.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="border-t border-white/10 bg-[#0b0b0b] px-6 py-16">

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">

            <ShieldCheck
              size={28}
              className="mx-auto text-[#22c55e]"
            />

            <h3 className="mt-4 font-black">
              Quality Checked
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/40">
              Every pair is listed with its actual condition.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">

            <Tag
              size={28}
              className="mx-auto text-[#22c55e]"
            />

            <h3 className="mt-4 font-black">
              Better Prices
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/40">
              Quality football boots without full retail prices.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">

            <MessageCircle
              size={28}
              className="mx-auto text-[#22c55e]"
            />

            <h3 className="mt-4 font-black">
              Easy Purchase
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/40">
              Contact CLEATO directly through WhatsApp.
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#080808] px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/30 sm:flex-row">

          <p>
            © {new Date().getFullYear()} CLEATO. All rights reserved.
          </p>

          <p>
            Football boots. Better prices.
          </p>

        </div>

      </footer>

    </main>
  );
}