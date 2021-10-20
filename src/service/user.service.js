const User = require("../model/use.model")

class UserService {
  async createUser (user_name, password) {
    // return'成功'
    const res = await User.create({ user_name, password })//简写
    // console.log(res);
    return res.dataValues
  }

  async getUserInfo ({ id, user_name, password, is_admin }) {
    const whereOpt = {}

    id && Object.assign(whereOpt, { id })
    user_name && Object.assign(whereOpt, { user_name })
    password && Object.assign(whereOpt, { password })
    is_admin && Object.assign(whereOpt, { is_admin })
    // 不加 await 会拿不到当前条数据一直pending
    const res = await User.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],//attributes为 SELECT 要查询的特定属性
      where: whereOpt

    })
    console.log(res, 'res11');
    // console.log(res, '22');
    return res ? res.dataValues : null
  }

}
module.exports = new UserService