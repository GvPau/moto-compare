import { create } from "zustand";

// Define a store for the logged-in user and their address
type UserStore = {
  user: { name: string; email: string } | null;
  address: { street: string; city: string; zip: string; state: string; country: string } | null;
  setUser: (user: { name: string; email: string }) => void;
  setAddress: (address: { street: string; city: string; zip: string; state: string; country: string }) => void;
  logout: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: { name: "pau", email: "masterpau@gearwable.com" },
  address: null,
  setUser: (user) => set({ user }), // Set a new user
  setAddress: (address) => set({ address }), // Set a new address
  logout: () => set({ user: null, address: null }), // Logout the user (set to null)
}));
