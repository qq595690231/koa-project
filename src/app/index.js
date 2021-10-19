/*
 * @Author: aze
 * @Date: 2021-10-18 14:23:32
 * @LastEditors: aze
 * @LastEditTime: 2021-10-19 14:40:31
 * @Description: 
 * @FilePath: \koa-pro\src\app\index.js
 */
const Koa = require('koa')
const koaBody = require('koa-body')//校验客户端传的数据

const errHandler = require('./errHandler')

// const Router = require('koa-router');

const userRouter = require('../router/user.route')

const app = new Koa()
app
  .use(koaBody())
  .use(userRouter.routes())


// 统一错误处理
app.on('error', errHandler)

module.exports = app