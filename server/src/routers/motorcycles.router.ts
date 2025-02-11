import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { prisma } from "../utils/prisma"; // We'll create this file next

export const motorcyclesRouter = router({
  getAll: publicProcedure.query(async () => {
    return await prisma.motorcycle.findMany();
  }),
  search: publicProcedure
    .input(
      z.object({
        brand: z.string().optional(),
        year: z.string().optional(),
        model: z.string().optional(),
        engineSize: z.number().optional(),
        horsePower: z.number().optional(),
        weight: z.number().optional(),
        type: z.string().optional(),
        price: z.number().optional(),
      })
    )
    .query(async ({ input }) => {
      const where = {
        AND: [
          input.brand
            ? {
                brand: { contains: input.brand, mode: "insensitive" as const },
              }
            : {},
          input.year
            ? {
                year: parseInt(input.year),
              }
            : {},
          input.model
            ? {
                model: { contains: input.model, mode: "insensitive" as const },
              }
            : {},
          input.engineSize !== undefined
            ? {
                engineSize: input.engineSize,
              }
            : {},
          input.horsePower !== undefined
            ? {
                horsePower: input.horsePower,
              }
            : {},
          input.weight !== undefined
            ? {
                weight: input.weight,
              }
            : {},
          input.type
            ? {
                type: { contains: input.type, mode: "insensitive" as const },
              }
            : {},
          input.price !== undefined
            ? {
                price: input.price,
              }
            : {},
        ],
      };

      return await prisma.motorcycle.findMany({
        where,
      });
    }),
});
