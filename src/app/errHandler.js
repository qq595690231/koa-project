/*
 * @Author: aze
 * @Date: 2021-10-19 11:45:44
 * @LastEditors: aze
 * @LastEditTime: 2021-10-19 11:47:55
 * @Description:
 * @FilePath: \koa-pro\src\app\errHandler.js
 */
module.exports = (err, ctx) => {
  let status = 500
  switch (err.code) {
    case '10001':
      status = 400
      break
    case '10002':
      status = 409
      break
    default:
      status = 500
  }
  ctx.status = status
  ctx.body = err
}