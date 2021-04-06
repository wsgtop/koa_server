import Router from 'koa-router'
import d from './data.js'

const router = new Router()
router.get('/captycha',ctx =>{
  const result =  d.captycha()
ctx.body = result
})

router.get('/captychaExpr',ctx =>{
  const result =  d.captychaExpr()
ctx.body = result
})

router.get('/captychaDIY',ctx =>{
  const result =  d.captychaDIY()
ctx.body = result
})
export default router

