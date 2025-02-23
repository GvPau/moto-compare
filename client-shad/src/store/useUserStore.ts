import { create } from "zustand";

// Define a store for the logged-in user
type UserStore = {
  user: { name: string; email: string } | null;
  setUser: (user: { name: string; email: string }) => void;
  logout: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: { name: "pau", email: "masterpau@gearwable.com" },
  setUser: (user) => set({ user }), // Set a new user
  logout: () => set({ user: null }), // Logout the user (set to null)
}));
