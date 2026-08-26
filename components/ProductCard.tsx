"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

type Product = {
  id: number;
  brand: string;
  model: string;
  size: string;
  price: number;
  condition: string;
  description?: string;
  image: string;
};

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const whatsappMessage = `Hi CLEATO, I'm interested in the ${product.brand} ${product.model}, size ${product.size}, priced at Rs. ${product.price.toLocaleString(
    "en-PK"
  )}. Is it still available?`;

  const whatsappLink = `https://wa.me/923092026986?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101512] transition duration-300 hover:-translate-y-1 hover:border-[#22c55e]/30"
    >
      {/* PRODUCT IMAGE */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#171d19]">
        <img
          src={product.image}
          alt={`${product.brand} ${product.model}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* CONDITION BADGE */}
        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-xs font-bold backdrop-blur-md">
          {product.condition}
        </div>
      </div>

      {/* PRODUCT INFORMATION */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#22c55e]">
              {product.brand}
            </p>

            <h3 className="mt-1 text-xl font-black">
              {product.model}
            </h3>
          </div>

          <div className="text-right">
            <p className="text-lg font-black">
              Rs. {product.price.toLocaleString("en-PK")}
            </p>
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div className="mt-5 flex items-center gap-4 border-y border-white/10 py-4 text-sm">
          <div>
            <p className="text-xs text-white/35">Size</p>
            <p className="mt-1 font-bold">{product.size}</p>
          </div>

          <div className="h-8 w-px bg-white/10" />

          <div className="flex items-center gap-1.5">
            <CheckCircle2
              size={15}
              className="text-[#22c55e]"
            />

            <span className="text-white/60">
              Checked
            </span>
          </div>
        </div>

        {/* DESCRIPTION */}
        {product.description && (
          <p className="mt-4 text-sm leading-6 text-white/40">
            {product.description}
          </p>
        )}

        {/* WHATSAPP BUTTON */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-bold transition hover:border-[#22c55e] hover:bg-[#22c55e] hover:text-black"
        >
          I'm Interested
          <ArrowRight size={16} />
        </a>
      </div>
    </motion.article>
  );
}