import { router, publicProcedure } from "../../trpc";
import { prisma } from "../../utils/prisma";

export const helmetRouter = router({
  getAll: publicProcedure.query(async () => {
    const helmets = await prisma.helmet.findMany();

    return helmets.map((helmet) => ({
      ...helmet,
      size: helmet.size,
    }));
  }),
});
