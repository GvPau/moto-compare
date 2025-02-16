import { trpc } from "../utils/trpc";
import { MotorcycleType } from "@entities/Motorcycle";

export interface FilterParams {
  brand: string;
  model: string;
  year: string;
  engineSize?: number;
  weight?: number;
  type: MotorcycleType | string;
  horsePower?: number;
  price?: number;
}

export const useFetchMotorcycles = () => {
  return trpc.motorcycles.getAll.useQuery();
};

export const useSearchMotorcycles = (filters: FilterParams) => {
  return trpc.motorcycles.search.useQuery(filters);
};
