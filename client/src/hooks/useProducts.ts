import { trpc } from "../utils/trpc";

export function useProducts() {
  return trpc.products.helmets.getAll.useQuery();
}
