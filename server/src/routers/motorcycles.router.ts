import { z } from "zod";
import { motorcycles } from "../mocks/motorcycles";
import { router, publicProcedure } from "../trpc";

export const motorcyclesRouter = router({
  getAll: publicProcedure.query(() => {
    return motorcycles;
  }),
  search: publicProcedure
    .input(
      z.object({
        brand: z.string().optional(),
        year: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      //await new Promise((resolve) => setTimeout(resolve, 1000));
      const filteredMotorcycles = motorcycles.filter((m) => {
        const matchesBrand = input.brand ? m.brand.toLowerCase().includes(input.brand.toLowerCase()) : true;
        const matchesYear = input.year ? m.year === Number(input.year) : true;
        return matchesBrand && matchesYear;
      });

      return filteredMotorcycles;
    }),
});
