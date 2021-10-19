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
    const res = User.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],//attributes为SELECT 查询特定属性
      where: whereOpt
    })
    // console.log(res, '22');
    return res ? res.dataValues : null
  }

}
module.exports = new UserService