const { createUser, getUserInfo } = require('../service/user.service')
const { userRegisterError } = require('../consitant/err.type')
class UserController {
  async register (ctx, next) {
    // 1.获取数据
    // console.log(ctx.request.body)
    const { user_name, password } = ctx.request.body

    try {
      //2.操作数据库
      const res = await createUser(user_name, password)
      // 3.返回结果
      // ctx.body=ctx.request.body
      ctx.body = {
        code: 0,
        message: '用户注册成功',
        result: {
          id: res.id,
          user_name: res.user_name
        },
      }
    } catch (err) {
      console.log(err, '用户名重复');
      ctx.app.emit('error', userRegisterError, ctx)

    }


  }
  async login (ctx, next) {
    ctx.body = '登录成功'
  }
}

module.exports = new UserController()