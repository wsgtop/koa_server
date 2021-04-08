import Koa from "koa";
import koaLogger from "koa-logger";
import moment from "moment";
import Router from 'koa-router'
import { log } from "./src/logger/log4js.js";
import user from "./src/routers/user/index.js";

const app = new Koa();
// 添加请求日志
const koaLog = koaLogger(str =>
  log.debug(moment().format("YYYY-MM-DD HH:mm:ss") + str));
app.use(koaLog);

//启动路由
const router = new Router()
router.use('/user',user.routes())
// router.use('/svgCaptcha',svgCaptcha.routes())

app.use(router.routes());
app.use(router.allowedMethods()); // 在所有路由中间件最后调用，此时更加ctx.status设置response响应头
const port = process.env.PORT || 3000;
app.listen(port, () => {
  log.info(moment().format("YYYY-MM-DD HH:mm:ss") + "  start server listening on Port " + port);
});

app.on("error", (err, ctx) => {
  log.error(err);
});
app.on("error-info", (err, ctx) => {
  log.info(err);
});