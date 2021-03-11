import Router from "koa-router";
import { logger } from "../../logger/log4js.js";
const CommonRouter = new Router();

import captcha from '../../service/svgCaptcha/index.js'

CommonRouter.get("/common/captcha", async(ctx) => {
const data = captcha.captycha()
  ctx.body = data
});
CommonRouter.get("/common/captychaExpr", async(ctx) => {
const data = captcha.captychaExpr()
  ctx.body = data
});
CommonRouter.get("/common/captychaDIY", async(ctx) => {
const data = captcha.captychaDIY()
  ctx.body = data
});

export default CommonRouter;