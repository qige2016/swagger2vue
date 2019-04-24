import request from '@/utils/request'
export function authcode(params) {
  return request({
    url: '/v0/authcode',
    params
  })
}
export function searchDealers(params) {
  return request({
    url: '/v0/dealers',
    params
  })
}
export function uploadImage(data) {
  return request({
    url: '/v0/images',
    method: 'post',
    data
  })
}
export function deleteImage(sn, data) {
  return request({
    url: `/v0/images/${sn}/delete`,
    method: 'post',
    data
  })
}
export function sMSSendVerifyCode(data) {
  return request({
    url: '/v0/sms-verifiction-codes',
    method: 'post',
    data
  })
}
export function searchStations(params) {
  return request({
    url: '/v0/stations',
    params
  })
}
export function verifySMSCode(data) {
  return request({
    url: '/v0/verify-sms-code',
    method: 'post',
    data
  })
}