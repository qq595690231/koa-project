/*
 * @Author: aze
 * @Date: 2021-10-18 14:23:32
 * @LastEditors: aze
 * @LastEditTime: 2021-10-20 14:03:35
 * @Description: 
 * @FilePath: \koa-pro\src\router\user.route.js
 */
const Router = require('koa-router')
const { userValidator, verifyUser, bcryptPassword, verifyLogin } = require('../middleware/user.middleware')
const { register, login } = require("../controller/user.controller")

const router = new Router({ prefix: '/user' })

//注册接口
router.post('/register', userValidator, verifyUser, bcryptPassword, register)

//登录接口
router.post('/login', userValidator, verifyLogin, login)


// router.get('/',(ctx,next)=>{
//     ctx.body='hello users'
// })

module.exports = router