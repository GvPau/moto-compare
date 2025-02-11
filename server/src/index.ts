import express from "express";
import cors from "cors";
import morgan from "morgan";
import { router } from "./trpc";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { motorcyclesRouter } from "./routers/motorcycles.router";

const appRouter = router({
  motorcycles: motorcyclesRouter,
});

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext: () => ({}),
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

export type AppRouter = typeof appRouter;
