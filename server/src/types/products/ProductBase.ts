export interface BaseProduct {
  id: number;
  name: string;
  brand: string;
  price: number;
  description: string;
  images: string[];
  category: ProductCategory;
  inStock: boolean;
  rating?: number;
  reviews?: ProductReview[];
}

export enum ProductCategory {
  HELMET = "helmet",
  GLOVES = "gloves",
  BOOTS = "boots",
  JACKETS = "jackets",
  PANTS = "pants",
  PROTECTIONS = "protections",
  ACCESSORIES = "accessories",
}

export interface ProductReview {
  id: number;
  userId: number;
  rating: number;
  comment: string;
  createdAt: Date;
}
