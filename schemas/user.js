/**
 * Created by zl on 2017/2/19.
 */
var mongo = require('mongoose');

//用户的表结构
module.exports = {
    //配置图表基础字段
    //用户名
    username : String,
    //密码
    password : String,
    //是否为管理员
    isAdmin: {
        type: Boolean,
        default: false
    }
}