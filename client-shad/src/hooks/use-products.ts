import { trpc } from "../utils/trpc";

export function useFetchProducts() {
  return trpc.products.helmets.getAll.useQuery();
}
