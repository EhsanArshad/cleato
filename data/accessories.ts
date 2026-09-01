export type Accessory = {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  description: string;
  image: string;
  tag: string;
};

export const accessories: Accessory[] = [
  {
    id: 1,
    name: "CLEATO Pro Resistance Bands (Set of 3 Camo)",
    category: "Training & Warmup Gear",
    price: 1500,
    originalPrice: 1800,
    description:
      "Heavy-duty fabric resistance loop bands in 3 resistance levels with mesh carry bag. Perfect for pre-match warmups, hip activation, and sprint conditioning.",
    image: "/products/resistance-bands.png",
    tag: "Essential Warmup",
  },
  {
    id: 2,
    name: "Pro Matte Black Mini Shinguards",
    category: "Matchday Protection",
    price: 1200,
    originalPrice: 1500,
    description:
      "Ultra-lightweight low-profile mini shin guards. Favored by modern pro wingers and playmakers for zero bulk, ankle freedom, and weightless protection.",
    image: "/products/mini-shinguards.png",
    tag: "Pro Trend",
  },
  {
    id: 3,
    name: "Anti-Slip Pro Football Grip Socks",
    category: "Matchday Gear",
    price: 850,
    originalPrice: 1200,
    description:
      "Breathable white match socks with high-friction silicone grip pads on the sole to eliminate foot slippage inside boots and prevent blisters.",
    image: "/products/grip-socks.png",
    tag: "Player Favorite",
  },
];
