import request from '@/utils/request'
// 获取图片验证码
export function authcode(params) {
  return request({
    url: '/v0/authcode',
    params
  })
}
// 查询经销商
export function searchDealers(params) {
  return request({
    url: '/v0/dealers',
    params
  })
}
// 上传图片
export function uploadImage(data) {
  return request({
    url: '/v0/images',
    method: 'post',
    data
  })
}
// 删除图片
export function deleteImage(sn, data) {
  return request({
    url: `/v0/images/${sn}/delete`,
    method: 'post',
    data
  })
}
// 发送短信验证码
export function sMSSendVerifyCode(data) {
  return request({
    url: '/v0/sms-verifiction-codes',
    method: 'post',
    data
  })
}
// 查询服务站
export function searchStations(params) {
  return request({
    url: '/v0/stations',
    params
  })
}
// 验证短信验证码
export function verifySMSCode(data) {
  return request({
    url: '/v0/verify-sms-code',
    method: 'post',
    data
  })
}