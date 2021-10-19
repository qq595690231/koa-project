/*
 * @Author: aze
 * @Date: 2021-10-19 10:36:17
 * @LastEditors: aze
 * @LastEditTime: 2021-10-19 15:09:26
 * @Description:
 * @FilePath: \koa-pro\src\middleware\user.middleware.js
 */

const { getUserInfo } = require('../service/user.service')
const { userFormateError, userAleadyExited, userRegisterError } = require('../consitant/err.type')
const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  if (!user_name || !password) {
    ctx.app.emit('error', userFormateError, ctx)
    return
  }
  await next()
}

const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body
  // if (await getUserInfo({ user_name })) {//不加await一直用户已存在（传的user_name有值默认执行，所以必须得等回调查询）
  //   ctx.app.emit('error', userAleadyExited, ctx)
  //   return
  // }
  try {
    const res = await getUserInfo({ user_name })
    if (res) {
      console.error('用户名已存在', { user_name })
      ctx.app.emit('error', userAleadyExited, ctx)
      return
    }
  } catch (err) {
    console.error('获取用户信息错误', err)
    ctx.app.emit('error', userRegisterError, ctx)
    return
  }
  await next()
}

module.exports = { userValidator, verifyUser }