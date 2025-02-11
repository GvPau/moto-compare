import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc";
import scraperRoutes from "./routes/scraper.routes";
import { adminAuth } from "./middleware/auth.middleware";

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// tRPC router
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

// Protected scraper routes
app.use("/api/admin/scraper", scraperRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export type AppRouter = typeof appRouter;
