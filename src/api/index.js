/*
包含n个接口请求函数的模块
函数的返回值：promise对象
*/
import ajax from './ajax'
//1 根据经纬度获取位置详情
export const reqAddress= (geohash) =>ajax(`/position/${geohash}`)
//2根据食品分类列表
export const reqFoodTypes= () =>ajax('/index_category')
//3根据经纬度获取商铺列表
export const reqShops= (longitude, latitude) =>ajax('/shops',{longitude,latitude})
//4根据经纬度和关键字搜索商铺列表
//5 获取一次性验证码
//6 用户名 密码登录
export const reqPwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', {
  name,
  pwd,
  captcha
}, 'POST')
//7 发怂短信验证码
export const reqSendCode = phone => ajax('/api/sendcode', {phone})
//8 手机号验证码登录
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')
//9 根据会话获取用户信息
export const reqUser = () => ajax('/api/userinfo')
//10 用户退出
export const reqLogout = () => ajax('/api/logout')
