import { BaseProduct, ProductCategory } from "./ProductBase";

export interface Gloves extends BaseProduct {
  category: ProductCategory.GLOVES;
  size: GloveSize;
  waterproof: boolean;
  touchscreenCompatible: boolean;
  protection: string[];
}

export type GloveSize = "XS" | "S" | "M" | "L" | "XL" | "XXL";
