/*
 * @Author: aze
 * @Date: 2021-10-19 10:36:17
 * @LastEditors: aze
 * @LastEditTime: 2021-10-20 16:39:27
 * @Description:
 * @FilePath: \koa-pro\src\middleware\user.middleware.js
 */
const bcrypt = require('bcryptjs')
const { getUserInfo } = require('../service/user.service')
const { userFormateError, userAleadyExited, userRegisterError, userDoesNotExited, userLoginError, invalidPassword } = require('../consitant/err.type')
// 注册校验空
const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  if (!user_name || !password) {
    ctx.app.emit('error', userFormateError, ctx)
    return
  }
  await next()
}
// 注册校验用户
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
// 注册加密
const bcryptPassword = async (ctx, next) => {
  const { password } = ctx.request.body
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  ctx.request.body.password = hash
  await next()
}
// 校验登录
const verifyLogin = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  try {
    const res = await getUserInfo({ user_name })
    console.log(res, 'ss');
    if (!res) {
      console.error('用户不存在', { user_name })
      ctx.app.emit('error', userDoesNotExited, ctx)
      return
    }
    if (!bcrypt.compareSync(password, res.password)) {
      ctx.app.emit('error', invalidPassword, ctx)
      return
    }
  } catch (err) {
    console.error(err)
    return ctx.app.emit('error', userLoginError, ctx)
    // await next()
  }

  // if (!bcrypt.compareSync(password, res.password)) {
  //   ctx.app.emit('error', invalidPassword, ctx)
  //   return
  // }
  // const res = await getUserInfo({ user_name })
  // if (!res) {
  //   console.error('用户不存在', { user_name })
  //   ctx.app.emit('error', userDoesNotExited, ctx)
  //   return
  // }
  await next()
}


module.exports = { userValidator, verifyUser, bcryptPassword, verifyLogin }