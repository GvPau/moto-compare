import { trpc } from "../utils/trpc";

export interface FilterParams {
  brand: string;
  model: string;
  year: string;
  engineSize?: number;
  weight?: number;
  type: string;
  horsePower?: number;
  price?: number;
}

export const useFetchMotorcycles = () => {
  return trpc.motorcycles.getAll.useQuery();
};

export const useSearchMotorcycles = ({ brand, year, model, engineSize, horsePower, weight, type, price }: FilterParams) => {
  return trpc.motorcycles.search.useQuery({ brand, year, model, engineSize, horsePower, weight, type, price });
};
