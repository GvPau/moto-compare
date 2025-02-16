import { router, publicProcedure } from "../../trpc";
import { prisma } from "../../utils/prisma";

export const helmetRouter = router({
  // Additional helmet-specific queries
  getAll: publicProcedure.query(async () => {
    return await prisma.helmet.findMany();
  }),
});
