import { router } from "../../trpc";
import { helmetRouter } from "./helmet.router";

export const productsRouter = router({
  helmets: helmetRouter,
});
