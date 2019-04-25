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
// 查询服务站
export function searchStations(params) {
  return request({
    url: '/v0/stations',
    params
  })
}