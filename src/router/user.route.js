/*
 * @Author: aze
 * @Date: 2021-10-18 14:23:32
 * @LastEditors: aze
 * @LastEditTime: 2021-10-19 11:03:47
 * @Description: 
 * @FilePath: \koa-pro\src\router\user.route.js
 */
const Router = require('koa-router')
const { userValidator, verifyUser } = require('../middleware/user.middleware')
const { register, login } = require("../controller/user.controller")

const router = new Router({ prefix: '/user' })

//注册接口
router.post('/register', userValidator, verifyUser, register)

//登录接口
router.post('/login', login)


// router.get('/',(ctx,next)=>{
//     ctx.body='hello users'
// })

module.exports = router