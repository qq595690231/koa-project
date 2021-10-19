/*
 * @Author: aze
 * @Date: 2021-10-18 14:23:32
 * @LastEditors: aze
 * @LastEditTime: 2021-10-19 14:41:36
 * @Description: 
 * @FilePath: \koa-pro\src\config\config.default.js
 */
const dotenv = require('dotenv')//环境配置中间件
dotenv.config()
// console.log(process.env.APP_PORT)

module.exports = process.env