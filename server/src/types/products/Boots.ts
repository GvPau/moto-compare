import { BaseProduct, ProductCategory } from "./ProductBase";

export interface Boots extends BaseProduct {
  category: ProductCategory.BOOTS;
  size: number;
  waterproof: boolean;
  ankleProtection: boolean;
  soleType: string;
}
