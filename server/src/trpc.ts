import { initTRPC } from "@trpc/server";
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;

import { motorcyclesRouter } from "./routers/motorcycles.router";

export const appRouter = router({
  motorcycles: motorcyclesRouter,
});
