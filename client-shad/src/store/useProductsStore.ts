import { create } from "zustand";
import { HelmetDisplay } from "../../../server/src/types/entities/Helmet";

type ProductStore = {
  products: {
    helmets: HelmetDisplay[];
    // jackets: Jacket[];
    // gloves: Glove[];
    // pants: Pant[];
    // boots: Boot[];
  };
  setHelmets: (helmets: HelmetDisplay[]) => void;
};

export const useProductsStore = create<ProductStore>((set) => ({
  products: {
    helmets: [],
    // jackets: [],
    // gloves: [],
    // pants: [],
    // boots: [],
  },
  setHelmets: (helmets: HelmetDisplay[]) =>
    set((state) => ({
      products: {
        ...state.products,
        helmets,
      },
    })),
}));
