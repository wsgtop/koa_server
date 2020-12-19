import Router from 'koa-router'
import d from './data.js'

const wxRouter = new Router()

wxRouter.get('/confirm', async(ctx, next) => {
  const result = await d.confire(ctx.request.query)
  ctx.body = result
})

export default wxRouter