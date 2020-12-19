import Router from "koa-router";
import { logger } from "../../logger/log4js.js";
import d from "./data.js";

const userRouter = new Router();

userRouter.get("/", async(ctx) => {
  const data = await d.getUser(ctx.query);
  ctx.body = data;
});

userRouter.post("/", async(ctx) => {
  const data = await d.addtUser(ctx.request.body);
  ctx.body = data;
});

userRouter.put("/", async(ctx) => {
  const data = await d.modifyUser(ctx.request.body);
  ctx.body = data;
});

userRouter.delete("/", async(ctx) => {
  const data = await d.deleteUser(ctx.query);
  ctx.body = data;
});

export default userRouter;