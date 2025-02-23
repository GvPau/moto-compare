import { create } from "zustand";

type ActivePageStore = {
  activePage: { title: string; url: string } | null;
  setActivePage: (page: { title: string; url: string }) => void;
};

export const useActivePageStore = create<ActivePageStore>((set) => ({
  activePage: null,
  setActivePage: (page) => set({ activePage: page }),
}));
