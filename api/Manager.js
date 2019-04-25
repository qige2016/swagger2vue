import request from '@/utils/request'
// 查询管理平台账号
export function searchManagers(params) {
  return request({
    url: '/v0/managers',
    params
  })
}
// 新增管理平台账号
export function addManagers(data) {
  return request({
    url: '/v0/managers',
    method: 'post',
    data
  })
}
// 管理员登录
export function managerLogin(data) {
  return request({
    url: '/v0/managers/login',
    method: 'post',
    data
  })
}
// 管理员登出
export function managerLogout(data) {
  return request({
    url: '/v0/managers/logout',
    method: 'post',
    data
  })
}
// 管理员微信登录后绑定已存在管理员
export function wechatExistManagerBind(data) {
  return request({
    url: '/v0/managers/mobile-exist-bind',
    method: 'post',
    data
  })
}
// 修改密码
export function modifyManagerPassword(data) {
  return request({
    url: '/v0/managers/modify-password',
    method: 'post',
    data
  })
}
// 管理员密码登录
export function managerPwdLogin(data) {
  return request({
    url: '/v0/managers/pwd-login',
    method: 'post',
    data
  })
}
// 密码重置
export function resetManagerPassword(data) {
  return request({
    url: '/v0/managers/reset-password',
    method: 'post',
    data
  })
}
// 管理员短信验证码登录
export function managerSMSLogin(data) {
  return request({
    url: '/v0/managers/sms-login',
    method: 'post',
    data
  })
}
// 管理员绑定微信（已登录）
export function wechatManagerBind(data) {
  return request({
    url: '/v0/managers/wechat-bind',
    method: 'post',
    data
  })
}
// 管理员微信登录
export function wechatManagerLogin(data) {
  return request({
    url: '/v0/managers/wechat-login',
    method: 'post',
    data
  })
}
// 管理员解绑微信（已登录）
export function wechatManagerUnbind(data) {
  return request({
    url: '/v0/managers/wechat-unbind',
    method: 'post',
    data
  })
}
// 获取账号信息
export function getManagers(uuid, params) {
  return request({
    url: `/v0/managers/${uuid}`,
    params
  })
}
// 修改管理平台账号
export function modifyManagers(uuid, data) {
  return request({
    url: `/v0/managers/${uuid}`,
    method: 'post',
    data
  })
}
// 禁用管理平台账号
export function disableManagers(uuid, data) {
  return request({
    url: `/v0/managers/${uuid}/disable`,
    method: 'post',
    data
  })
}
// 启用管理平台账号
export function enableManagers(uuid, data) {
  return request({
    url: `/v0/managers/${uuid}/enable`,
    method: 'post',
    data
  })
}