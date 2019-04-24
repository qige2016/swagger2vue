import request from '@/utils/request'
export function searchDrivers(params) {
  return request({
    url: '/v0/drivers',
    params
  })
}
export function getDriverDetail(uuid, params) {
  return request({
    url: `/v0/drivers/${uuid}`,
    params
  })
}
export function getDriverBind(uuid, params) {
  return request({
    url: `/v0/drivers/${uuid}/bind`,
    params
  })
}
export function disableDriver(uuid, data) {
  return request({
    url: `/v0/drivers/${uuid}/disable`,
    method: 'post',
    data
  })
}
export function enableDriver(uuid, data) {
  return request({
    url: `/v0/drivers/${uuid}/enable`,
    method: 'post',
    data
  })
}