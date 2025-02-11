import { trpc } from "../utils/trpc";

interface FilterParams {
  brand?: string;
  year?: string;
}

export const useFetchMotorcycles = () => {
  return trpc.motorcycles.getAll.useQuery();
};

export const useSearchMotorcycles = ({ brand, year }: FilterParams) => {
  return trpc.motorcycles.search.useQuery({ brand, year });
};
