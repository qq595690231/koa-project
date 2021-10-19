/*
 * @Author: aze
 * @Date: 2021-10-19 11:19:10
 * @LastEditors: aze
 * @LastEditTime: 2021-10-19 14:47:12
 * @Description:
 * @FilePath: \koa-pro\src\consitant\err.type.js
 */

module.exports = {
  userFormateError: {
    code: "10001",
    message: '用户名或密码为空',
    result: ''
  },
  userAleadyExited: {
    code: "10002",
    message: '用户名已存在',
    result: ''
  },
  userRegisterError: {
    code: "10003",
    message: '用户注册失败',
    result: ''
  }
}