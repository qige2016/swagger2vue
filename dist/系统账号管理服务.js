import request from '@/utils/request'
export function searchManagers(params) {
  return request({
    url: '/v0/managers',
    params
  })
}
export function addManagers(data) {
  return request({
    url: '/v0/managers',
    method: 'post',
    data
  })
}
export function managerLogin(data) {
  return request({
    url: '/v0/managers/login',
    method: 'post',
    data
  })
}
export function managerLogout(data) {
  return request({
    url: '/v0/managers/logout',
    method: 'post',
    data
  })
}
export function wechatExistManagerBind(data) {
  return request({
    url: '/v0/managers/mobile-exist-bind',
    method: 'post',
    data
  })
}
export function modifyManagerPassword(data) {
  return request({
    url: '/v0/managers/modify-password',
    method: 'post',
    data
  })
}
export function managerPwdLogin(data) {
  return request({
    url: '/v0/managers/pwd-login',
    method: 'post',
    data
  })
}
export function resetManagerPassword(data) {
  return request({
    url: '/v0/managers/reset-password',
    method: 'post',
    data
  })
}
export function managerSMSLogin(data) {
  return request({
    url: '/v0/managers/sms-login',
    method: 'post',
    data
  })
}
export function wechatManagerBind(data) {
  return request({
    url: '/v0/managers/wechat-bind',
    method: 'post',
    data
  })
}
export function wechatManagerLogin(data) {
  return request({
    url: '/v0/managers/wechat-login',
    method: 'post',
    data
  })
}
export function wechatManagerUnbind(data) {
  return request({
    url: '/v0/managers/wechat-unbind',
    method: 'post',
    data
  })
}
export function getManagers(uuid, params) {
  return request({
    url: `/v0/managers/${uuid}`,
    params
  })
}
export function modifyManagers(uuid, data) {
  return request({
    url: `/v0/managers/${uuid}`,
    method: 'post',
    data
  })
}
export function disableManagers(uuid, data) {
  return request({
    url: `/v0/managers/${uuid}/disable`,
    method: 'post',
    data
  })
}
export function enableManagers(uuid, data) {
  return request({
    url: `/v0/managers/${uuid}/enable`,
    method: 'post',
    data
  })
}