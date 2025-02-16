import { BaseProduct, ProductCategory } from "./ProductBase";

export interface Helmet extends BaseProduct {
  category: ProductCategory.HELMET;
  size: HelmetSize;
  style: HelmetStyle;
  certification: string[];
  weight: number;
}

export type HelmetSize = "XS" | "S" | "M" | "L" | "XL" | "XXL";
export type HelmetStyle = "full-face" | "modular" | "open-face" | "off-road";
