import { Helmet, HelmetSize, HelmetStyle } from "../types/entities/Helmet";

export const helmets: Helmet[] = [
  {
    id: 1,
    name: "X-Spirit III",
    brand: "Shoei",
    price: 699.99,
    description: "Premium racing helmet with advanced aerodynamics",
    images: [
      "https://cf-cdn.motocard.com/cdn-cgi/image/w=550,h=550,q=91,fit=cover,f=auto/products/images/07366/x_spirit_3_matt_black-1-M-0736677.jpg?v=745089df80e3c02ec187e7c90ccdbcce",
      "https://cdn2.louis.de/dynamic/articles/o_resize,w_1800,h_1800,m_limit,c_fff::o_extension,e_webp/8e.3d.32.H1SHOEIXSPIRITIIIgelbschwarz215249.JPG",
    ],
    inStock: true,
    size: HelmetSize.M,
    style: HelmetStyle.FULL_FACE,
    certification: ["ECE 22.05", "SNELL"],
    weight: 1.4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "GT-Air II",
    brand: "Shoei",
    price: 599.99,
    description: "Versatile touring helmet with integrated sun visor",
    images: ["https://example.com/shoei-gt-air-1.jpg"],
    inStock: true,
    size: HelmetSize.L,
    style: HelmetStyle.MODULAR,
    certification: ["ECE 22.05"],
    weight: 1.45,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
