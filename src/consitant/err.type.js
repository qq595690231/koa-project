/*
 * @Author: aze
 * @Date: 2021-10-19 11:19:10
 * @LastEditors: aze
 * @LastEditTime: 2021-10-19 17:46:18
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
  },
  userDoesNotExited: {
    code: "10004",
    message: '用户不存在',
    result: ''
  },
  userLoginError: {
    code: "10005",
    message: '登录失败',
    result: ''
  },
  invalidPassword: {
    code: "10006",
    message: '密码不匹配',
    result: ''
  },
}