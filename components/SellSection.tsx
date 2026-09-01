"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";

export default function SellSection() {
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `Hi CLEATO, I want to sell/trade my football boots.

*Seller Details:*
Name: ${form.name}
WhatsApp: ${form.whatsapp}

*Boot Information:*
Brand: ${form.brand}
Model: ${form.model}
Size: ${form.size}
Condition: ${form.condition}
Asking Price: PKR ${form.price}

*Notes:*
${form.details || "No additional notes"}

I am ready to share photos of the boots on WhatsApp.`;

    const whatsappUrl = `https://wa.me/923092026986?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="sell" className="py-20 bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Trade-In Story */}
          <div className="lg:col-span-5">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
              CLEATO Circular / Trade-In
            </span>
            <h2 className="mt-2 text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95]">
              TURN UNUSED BOOTS <br /> INTO CASH.
            </h2>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-neutral-600">
              Have boots sitting in your kit bag? Fill out the details below. Send photos over WhatsApp, get a valuation, and get paid quickly.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-black shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold uppercase">1. Submit Details</h4>
                  <p className="text-xs text-neutral-500">Provide the brand, model, size, and asking price.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-black shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold uppercase">2. Send Photos via WhatsApp</h4>
                  <p className="text-xs text-neutral-500">Share clear snaps of the upper, studs, and size tag.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-black shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold uppercase">3. Agree & Get Paid</h4>
                  <p className="text-xs text-neutral-500">We verify the condition and finalize payment with you.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form Container */}
          <div className="lg:col-span-7 bg-[#f7f7f7] p-6 sm:p-10 border border-neutral-200">
            <h3 className="text-2xl font-black uppercase tracking-tight">
              Submit Your Boots
            </h3>
            <p className="mt-1 text-xs text-neutral-500">
              You will be redirected to WhatsApp with your listing ready to send.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Ali Ahmed"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-neutral-300 bg-white px-4 py-3 text-xs font-medium text-black outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">WhatsApp Number</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    placeholder="03XX XXXXXXX"
                    value={form.whatsapp}
                    onChange={handleChange}
                    className="w-full border border-neutral-300 bg-white px-4 py-3 text-xs font-medium text-black outline-none focus:border-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">Brand</label>
                  <select
                    name="brand"
                    required
                    value={form.brand}
                    onChange={handleChange}
                    className="w-full border border-neutral-300 bg-white px-4 py-3 text-xs font-medium text-black outline-none focus:border-black"
                  >
                    <option value="">Select Brand</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Nike">Nike</option>
                    <option value="Puma">Puma</option>
                    <option value="Mizuno">Mizuno</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">Model</label>
                  <input
                    type="text"
                    name="model"
                    required
                    placeholder="e.g. Predator, F50"
                    value={form.model}
                    onChange={handleChange}
                    className="w-full border border-neutral-300 bg-white px-4 py-3 text-xs font-medium text-black outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">Size</label>
                  <input
                    type="text"
                    name="size"
                    required
                    placeholder="e.g. UK 9"
                    value={form.size}
                    onChange={handleChange}
                    className="w-full border border-neutral-300 bg-white px-4 py-3 text-xs font-medium text-black outline-none focus:border-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">Condition</label>
                  <select
                    name="condition"
                    required
                    value={form.condition}
                    onChange={handleChange}
                    className="w-full border border-neutral-300 bg-white px-4 py-3 text-xs font-medium text-black outline-none focus:border-black"
                  >
                    <option value="">Select Condition</option>
                    <option value="Brand New with Box">Brand New with Box</option>
                    <option value="Like New (Worn 1-2 times)">Like New (Worn 1-2 times)</option>
                    <option value="Excellent Condition">Excellent Condition</option>
                    <option value="Good Condition">Good Condition</option>
                    <option value="Used">Used</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">Asking Price (PKR)</label>
                  <input
                    type="number"
                    name="price"
                    required
                    placeholder="e.g. 15000"
                    value={form.price}
                    onChange={handleChange}
                    className="w-full border border-neutral-300 bg-white px-4 py-3 text-xs font-medium text-black outline-none focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-neutral-700 mb-1">Additional Details</label>
                <textarea
                  name="details"
                  rows={3}
                  placeholder="Mention sole type (FG / SG / TF), original box availability, or flaws..."
                  value={form.details}
                  onChange={handleChange}
                  className="w-full border border-neutral-300 bg-white px-4 py-3 text-xs font-medium text-black outline-none focus:border-black resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-black py-4 text-xs font-black uppercase tracking-widest text-white hover:bg-neutral-800 transition"
              >
                <MessageCircle size={16} /> Send Listing on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
