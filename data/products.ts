export type Product = {
  id: number;
  slug: string;
  brand: string;
  model: string;
  category: "Speed" | "Control";
  size: string;
  condition: "Brand New" | "Like New" | "Excellent" | "Pre-Owned (Used)";
  conditionScore: number;
  price: number;
  originalPrice: number;
  description: string;
  color: string;
  image: string;
  available: boolean;
};

export const products: Product[] = [
  // 1. Adidas Predator Elite FT (Brand New)
  {
    id: 1,
    slug: "adidas-predator-elite-ft",
    brand: "Adidas",
    model: "Predator Elite FT",
    category: "Control",
    size: "UK 9",
    condition: "Brand New",
    conditionScore: 10,
    price: 18500,
    originalPrice: 20500,
    description:
      "Brand new Adidas Predator Elite featuring the legendary foldover tongue and Strikeskin rubber grip elements. Match-ready precision control.",
    color: "Core Black / Solar Red",
    image: "/products/adidas-predator.png",
    available: true,
  },

  // 2. Adidas Predator Edge Pro (Excellent)
  {
    id: 2,
    slug: "adidas-predator-edge-pro",
    brand: "Adidas",
    model: "Predator Edge Pro",
    category: "Control",
    size: "UK 8.5",
    condition: "Excellent",
    conditionScore: 9,
    price: 16000,
    originalPrice: 18000,
    description:
      "Adidas Predator Edge in excellent condition. Zone Skin ribbed upper engineered for spin, power, and precise swerve on firm ground.",
    color: "Black / Vivid Orange",
    image: "/products/adidas-predator-cleats.png",
    available: true,
  },

  // 3. Adidas F50 Elite Fast Reborn (Brand New with Box)
  {
    id: 3,
    slug: "adidas-f50-elite-fast-reborn",
    brand: "Adidas",
    model: "F50 Elite Fast Reborn",
    category: "Speed",
    size: "UK 9",
    condition: "Brand New",
    conditionScore: 10,
    price: 20000,
    originalPrice: 22000,
    description:
      "Brand new in original box. Adidas F50 Elite with Fibertouch upper, Sprintweb 3D texture, and Sprintframe 360 soleplate for explosive pitch pace.",
    color: "White / Lucid Blue / Solar Red",
    image: "/products/f50-elite-fast-reborn.png",
    available: true,
  },

  // 4. Nike Mercurial Vapor 15 (Pre-Owned - User Uploaded Pink/White)
  {
    id: 4,
    slug: "nike-mercurial-vapor-15",
    brand: "Nike",
    model: "Mercurial Vapor 15",
    category: "Speed",
    size: "UK 8.5",
    condition: "Pre-Owned (Used)",
    conditionScore: 8.5,
    price: 14000,
    originalPrice: 16000,
    description:
      "Pre-owned Nike Mercurial Vapor 15 in striking Pink/White gradient. Lightweight synthetic upper with high-traction sole for explosive acceleration.",
    color: "Pink Flash / White / Black",
    image: "/products/mercurial-vapor-15.png",
    available: true,
  },

  // 5. Adidas F50 Adizero Light Sprint (Pre-Owned - User Uploaded White/Blue)
  {
    id: 5,
    slug: "adidas-f50-adizero-light-sprint",
    brand: "Adidas",
    model: "F50 Adizero Light Sprint",
    category: "Speed",
    size: "UK 9",
    condition: "Pre-Owned (Used)",
    conditionScore: 8.5,
    price: 13000,
    originalPrice: 15000,
    description:
      "Pre-owned Adidas F50 Adizero sprint boots in White/Blue/Orange. Featherlight Sprintskin upper and clean lacing structure. Inspected and pitch-ready.",
    color: "White / Royal Blue / Solar Orange",
    image: "/products/f50-adizero-light-sprint.png",
    available: true,
  },

  // 6. Adidas Predator Freak .1 Demonskin (Pre-Owned - User Uploaded Pink Spikes)
  {
    id: 6,
    slug: "adidas-predator-freak-1-demonskin",
    brand: "Adidas",
    model: "Predator Freak .1 Demonskin",
    category: "Control",
    size: "UK 9",
    condition: "Pre-Owned (Used)",
    conditionScore: 8.5,
    price: 13500,
    originalPrice: 15000,
    description:
      "Pre-owned Adidas Predator Freak .1 with 360-degree Demonskin rubber spikes intact. Delivers ferocious swerve and ball grip on every strike.",
    color: "Core Black / Team Shock Pink",
    image: "/products/predator-freak-demonskin.png",
    available: true,
  },

  // 7. Nike Phantom GX Gripknit (Pre-Owned - User Uploaded Black/Orange)
  {
    id: 7,
    slug: "nike-phantom-gx-gripknit",
    brand: "Nike",
    model: "Phantom GX Gripknit",
    category: "Control",
    size: "UK 8",
    condition: "Pre-Owned (Used)",
    conditionScore: 8.5,
    price: 14500,
    originalPrice: 16500,
    description:
      "Pre-owned Nike Phantom GX featuring revolutionary Gripknit yarn upper. High-collar fit with orange accents, providing sticky grip in all weather.",
    color: "Shadow Black / Laser Orange",
    image: "/products/phantom-gx-gripknit.png",
    available: true,
  },
];
