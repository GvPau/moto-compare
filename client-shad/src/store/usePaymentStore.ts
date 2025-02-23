import { create } from "zustand";

// Reponsible for defining the type of payment store
// Not confuse with the card payment store

type PaymentStore = {
  paymentMethod: string | null;
  name: string | null;
  email: string | null;
  city: string | null;
  cardNumber: string | null;
  expires: string | null;
  year: string | null;
  cvc: string | null;
  setPaymentMethod: (paymentMethod: string) => void;
};

// Create the payment store
export const usePaymentStore = create<PaymentStore>((set) => ({
  paymentMethod: null,
  name: null,
  email: null,
  city: null,
  cardNumber: null,
  expires: null,
  year: null,
  cvc: null,
  setPaymentMethod: (paymentMethod) => set({ paymentMethod }),
}));
