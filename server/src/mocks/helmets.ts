import { HelmetSize, HelmetStyle } from "@prisma/client";

export const helmets = [
  {
    name: "X-Spirit III",
    brand: "Shoei",
    price: 699.99,
    description: "Premium racing helmet with advanced aerodynamics",
    images: [
      "https://example.com/shoei-x-spirit-1.jpg",
      "https://example.com/shoei-x-spirit-2.jpg"
    ],
    size: HelmetSize.M,
    style: HelmetStyle.FULL_FACE,
    certification: ["ECE 22.05", "SNELL"],
    weight: 1.4
  },
  {
    name: "GT-Air II",
    brand: "Shoei",
    price: 599.99,
    description: "Versatile touring helmet with integrated sun visor",
    images: [
      "https://example.com/shoei-gt-air-1.jpg"
    ],
    size: HelmetSize.L,
    style: HelmetStyle.MODULAR,
    certification: ["ECE 22.05"],
    weight: 1.45
  }
];
