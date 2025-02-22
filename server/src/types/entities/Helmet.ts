export enum HelmetSize {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

export enum HelmetStyle {
  FULL_FACE = "FULL_FACE",
  MODULAR = "MODULAR",
  OPEN_FACE = "OPEN_FACE",
  OFF_ROAD = "OFF_ROAD",
}

export interface Helmet {
  id: number;
  name: string;
  brand: string;
  price: number;
  description: string;
  images: string[];
  inStock: boolean;
  rating?: number | null;
  size: HelmetSize;
  style: HelmetStyle;
  certification: string[];
  weight: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface HelmetDisplay extends Omit<Helmet, "createdAt" | "updatedAt"> {
  formattedPrice?: string;
  isNew?: boolean;
  isComingSoon?: boolean;
}
