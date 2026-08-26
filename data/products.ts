export type Product = {
  id: number;
  slug: string;
  brand: string;
  model: string;
  category: string;
  size: string;
  condition: string;
  conditionScore: number;
  price: number;
  originalPrice: number;
  description: string;
  color: string;
  image: string;
  available: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "adidas-predator",
    brand: "Adidas",
    model: "Predator",
    category: "Control",
    size: "UK 9",
    condition: "Excellent",
    conditionScore: 9,
    price: 15000,
    originalPrice: 28000,
    description:
      "Adidas Predator football boots in excellent pre-owned condition. A great option for players looking for control, grip and premium performance at a much better price.",
    color: "Black",
    image: "/products/adidas-predator.png",
    available: true,
  },

  {
    id: 2,
    slug: "adidas-predator-cleats",
    brand: "Adidas",
    model: "Predator Cleats",
    category: "Control",
    size: "UK 8.5",
    condition: "Brand New",
    conditionScore: 10,
    price: 16000,
    originalPrice: 30000,
    description:
      "Brand new Adidas Predator cleats. Never worn and ready to hit the pitch. A strong choice for players who want a fresh pair without paying full retail price.",
    color: "Black",
    image: "/products/adidas-predator-cleats.png",
    available: true,
  },

  {
    id: 3,
    slug: "adidas-f50",
    brand: "Adidas",
    model: "F50",
    category: "Speed",
    size: "UK 9",
    condition: "New",
    conditionScore: 10,
    price: 20000,
    originalPrice: 35000,
    description:
      "New Adidas F50 football boots built for players who want speed, acceleration and a lightweight feel on the pitch.",
    color: "White / Black",
    image: "/products/adidas-f50.jpg",
    available: true,
  },
];