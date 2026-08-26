"use client";

import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Tag,
  Zap,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import ShopSection from "@/components/ShopSection";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    brand: "",
    model: "",
    size: "",
    condition: "",
    price: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `Hi CLEATO, I want to sell my football boots.

Seller Name: ${form.name}
WhatsApp Number: ${form.whatsapp}

Boot Brand: ${form.brand}
Boot Model: ${form.model}
Size: ${form.size}
Condition: ${form.condition}
Asking Price: PKR ${form.price}

Additional Details:
${form.details}

I can send photos of the boots on WhatsApp.`;

    const whatsappUrl = `https://wa.me/923092026986?text=${encodeURIComponent(
      message
    )}`;

    setSubmitted(true);

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main id="top" className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      {/* =========================
          HERO
      ========================== */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22c55e]/10 blur-[150px]" />

        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#22c55e]/20 bg-[#22c55e]/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#22c55e]">
              <Zap size={14} />
              Football boots. Better prices.
            </div>

            {/* Main heading */}
            <h1 className="max-w-5xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-8xl">
              PLAY MORE.
              <br />
              <span className="text-[#22c55e]">SPEND LESS.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
              Buy quality boots without breaking the bank, or turn your
              unused pair into cash. With CLEATO, everyone gets more value
              from every boot.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#shop"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#22c55e] px-8 py-4 text-sm font-black text-black transition hover:bg-[#16a34a]"
              >
                Shop Boots
                <ArrowRight size={18} />
              </a>

              <a
                href="#sell"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-bold text-white transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                Sell Your Boots
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-5 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-[#22c55e]" />
                Quality Checked
              </div>

              <div className="flex items-center gap-2">
                <Tag size={17} className="text-[#22c55e]" />
                Great Prices
              </div>

              <div className="flex items-center gap-2">
                <Zap size={17} className="text-[#22c55e]" />
                Ready to Play
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================
          SHOP
      ========================== */}

      <ShopSection />

      {/* =========================
          SELL YOUR BOOTS
      ========================== */}

      <section
        id="sell"
        className="border-t border-white/10 bg-[#0b0b0b] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#22c55e]">
              Sell Your Boots
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Turn your unused boots into cash.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
              Have football boots sitting unused? Tell us about your pair and
              CLEATO will review the details and get back to you.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            {/* Sell Process */}
            <div>
              <div className="rounded-[2rem] border border-[#22c55e]/20 bg-[#22c55e]/5 p-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#22c55e]">
                  How it works
                </p>

                <div className="mt-8 space-y-7">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#22c55e] font-black text-black">
                      01
                    </div>

                    <div>
                      <h3 className="font-black">
                        Tell us about your boots
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-white/40">
                        Enter the brand, model, size, condition and price you
                        are looking for.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#22c55e] font-black text-black">
                      02
                    </div>

                    <div>
                      <h3 className="font-black">Send us photos</h3>

                      <p className="mt-1 text-sm leading-6 text-white/40">
                        After submitting the form, send clear photos of the
                        boots through WhatsApp.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#22c55e] font-black text-black">
                      03
                    </div>

                    <div>
                      <h3 className="font-black">Get an offer</h3>

                      <p className="mt-1 text-sm leading-6 text-white/40">
                        CLEATO reviews your boots and discusses the final
                        price with you.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#22c55e] font-black text-black">
                      04
                    </div>

                    <div>
                      <h3 className="font-black">Complete the deal</h3>

                      <p className="mt-1 text-sm leading-6 text-white/40">
                        Once everything is agreed, complete the sale and get
                        paid.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seller Note */}
              <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-[#101010] p-6">
                <div className="flex gap-4">
                  <ShieldCheck
                    size={24}
                    className="mt-1 shrink-0 text-[#22c55e]"
                  />

                  <div>
                    <h3 className="font-black">
                      Be honest about condition
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/40">
                      Accurate information helps us evaluate your boots fairly
                      and makes the selling process easier.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sell Form */}
            <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-6 shadow-2xl sm:p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-black">
                  Submit your boots
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  Fill in the details below. You&apos;ll be taken to WhatsApp
                  to send your listing to CLEATO.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + WhatsApp */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-white/70"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#22c55e]/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="mb-2 block text-sm font-bold text-white/70"
                    >
                      WhatsApp Number
                    </label>

                    <input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      required
                      value={form.whatsapp}
                      onChange={handleChange}
                      placeholder="03XX XXXXXXX"
                      className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#22c55e]/50"
                    />
                  </div>
                </div>

                {/* Brand + Model */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="brand"
                      className="mb-2 block text-sm font-bold text-white/70"
                    >
                      Brand
                    </label>

                    <select
                      id="brand"
                      name="brand"
                      required
                      value={form.brand}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#22c55e]/50"
                    >
                      <option value="">Select brand</option>
                      <option value="Adidas">Adidas</option>
                      <option value="Nike">Nike</option>
                      <option value="Puma">Puma</option>
                      <option value="New Balance">New Balance</option>
                      <option value="Mizuno">Mizuno</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="model"
                      className="mb-2 block text-sm font-bold text-white/70"
                    >
                      Boot Model
                    </label>

                    <input
                      id="model"
                      name="model"
                      type="text"
                      required
                      value={form.model}
                      onChange={handleChange}
                      placeholder="e.g. Predator, F50"
                      className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#22c55e]/50"
                    />
                  </div>
                </div>

                {/* Size + Condition */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="size"
                      className="mb-2 block text-sm font-bold text-white/70"
                    >
                      Boot Size
                    </label>

                    <input
                      id="size"
                      name="size"
                      type="text"
                      required
                      value={form.size}
                      onChange={handleChange}
                      placeholder="e.g. UK 9"
                      className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#22c55e]/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="condition"
                      className="mb-2 block text-sm font-bold text-white/70"
                    >
                      Condition
                    </label>

                    <select
                      id="condition"
                      name="condition"
                      required
                      value={form.condition}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[#22c55e]/50"
                    >
                      <option value="">Select condition</option>
                      <option value="Brand New">Brand New</option>
                      <option value="Like New">Like New</option>
                      <option value="Excellent">Excellent</option>
                      <option value="Good">Good</option>
                      <option value="Used">Used</option>
                    </select>
                  </div>
                </div>

                {/* Price */}
                <div>
                  <label
                    htmlFor="price"
                    className="mb-2 block text-sm font-bold text-white/70"
                  >
                    Asking Price (PKR)
                  </label>

                  <input
                    id="price"
                    name="price"
                    type="number"
                    min="0"
                    required
                    value={form.price}
                    onChange={handleChange}
                    placeholder="e.g. 15000"
                    className="w-full rounded-xl border border-white/10 bg-[#080808] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#22c55e]/50"
                  />
                </div>

                {/* Details */}
                <div>
                  <label
                    htmlFor="details"
                    className="mb-2 block text-sm font-bold text-white/70"
                  >
                    Additional Details
                  </label>

                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    value={form.details}
                    onChange={handleChange}
                    placeholder="Tell us anything else about the boots..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#080808] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#22c55e]/50"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#22c55e] px-7 py-4 text-sm font-black text-black transition hover:bg-[#16a34a]"
                >
                  <Send size={18} />
                  Send Listing on WhatsApp
                </button>

                {submitted && (
                  <div className="flex items-center justify-center gap-2 rounded-xl border border-[#22c55e]/20 bg-[#22c55e]/10 px-4 py-3 text-sm font-semibold text-[#22c55e]">
                    <CheckCircle2 size={18} />
                    Listing prepared. Opening WhatsApp...
                  </div>
                )}

                <p className="text-center text-xs leading-5 text-white/25">
                  After submitting, please send clear photos of your boots on
                  WhatsApp so we can evaluate them.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ABOUT
      ========================== */}

      <section
        id="about"
        className="border-t border-white/10 bg-[#080808] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#22c55e]">
              About CLEATO
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Football boots should be easier to afford.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
              CLEATO is a football boot marketplace built around a simple
              idea: give players access to quality boots without forcing them
              to pay full retail prices.
            </p>
          </div>

          {/* About Cards */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#101010] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#22c55e]/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#22c55e]/10 text-xl font-black text-[#22c55e]">
                01
              </div>

              <h3 className="mt-6 text-xl font-black">Our Mission</h3>

              <p className="mt-3 text-sm leading-7 text-white/40">
                Make quality football boots more accessible to players by
                connecting them with affordable new and pre-owned options.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-[#101010] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#22c55e]/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#22c55e]/10 text-xl font-black text-[#22c55e]">
                02
              </div>

              <h3 className="mt-6 text-xl font-black">
                Give Boots Another Life
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/40">
                Instead of letting good boots sit unused, CLEATO gives sellers
                a way to pass them on to another footballer.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-[#101010] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#22c55e]/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#22c55e]/10 text-xl font-black text-[#22c55e]">
                03
              </div>

              <h3 className="mt-6 text-xl font-black">Built for Players</h3>

              <p className="mt-3 text-sm leading-7 text-white/40">
                From speed boots to control boots, CLEATO focuses on what
                footballers actually need: the right pair at the right price.
              </p>
            </div>
          </div>

          {/* Bottom Statement */}
          <div className="mt-10 rounded-[1.75rem] border border-[#22c55e]/20 bg-[#22c55e]/5 p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#22c55e]">
                  The CLEATO idea
                </p>

                <h3 className="mt-3 text-2xl font-black md:text-3xl">
                  Better boots. Better prices. More football.
                </h3>
              </div>

              <a
                href="#shop"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#22c55e] px-6 py-3.5 text-sm font-black text-black transition hover:bg-[#16a34a]"
              >
                Explore Boots
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CONTACT
      ========================== */}

      <section
        id="contact"
        className="border-t border-white/10 bg-[#0b0b0b] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            {/* Contact Intro */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#22c55e]">
                Get in touch
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                Got a question?
                <br />
                <span className="text-[#22c55e]">
                  Let&apos;s talk boots.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/50 sm:text-lg">
                Looking for a particular size, want to know more about a pair,
                or need help choosing the right football boots? Send CLEATO a
                message and we&apos;ll help you out.
              </p>

              <a
                href="https://wa.me/923092026986?text=Hi%20CLEATO%2C%20I%20want%20to%20know%20more%20about%20your%20football%20boots"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#22c55e] px-7 py-4 text-sm font-black text-black transition hover:bg-[#16a34a]"
              >
                <MessageCircle size={19} />
                Message CLEATO
              </a>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/923092026986"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-[1.5rem] border border-white/10 bg-[#101010] p-6 transition duration-300 hover:border-[#22c55e]/30"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                      WhatsApp
                    </p>

                    <h3 className="mt-2 text-xl font-black">
                      Chat with CLEATO
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/40">
                      Ask about availability, sizes, prices or buying a pair.
                    </p>
                  </div>

                  <ArrowRight
                    size={20}
                    className="text-white/20 transition group-hover:translate-x-1 group-hover:text-[#22c55e]"
                  />
                </div>
              </a>

              {/* Sell */}
              <a
                href="#sell"
                className="group block rounded-[1.5rem] border border-white/10 bg-[#101010] p-6 transition duration-300 hover:border-[#22c55e]/30"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                      Sell Your Boots
                    </p>

                    <h3 className="mt-2 text-xl font-black">
                      Turn unused boots into cash
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/40">
                      Fill out the seller form and send us your boots&apos;
                      details.
                    </p>
                  </div>

                  <ArrowRight
                    size={20}
                    className="text-white/20 transition group-hover:translate-x-1 group-hover:text-[#22c55e]"
                  />
                </div>
              </a>

              {/* Help Topics */}
              <div className="rounded-[1.5rem] border border-white/10 bg-[#101010] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                  What can we help with?
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/50">
                    Product availability
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/50">
                    Sizes
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/50">
                    Pricing
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/50">
                    Selling boots
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}

      <footer className="border-t border-white/10 bg-[#080808] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/30 sm:flex-row">
          <p>
            © {new Date().getFullYear()} CLEATO. All rights reserved.
          </p>

          <p>Football boots. Better prices.</p>
        </div>
      </footer>
    </main>
  );
}