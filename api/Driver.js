import request from '@/utils/request'
// 查询驾驶员
export function searchDrivers(params) {
  return request({
    url: '/v0/drivers',
    params
  })
}
// 获取驾驶员详情
export function getDriverDetail(uuid, params) {
  return request({
    url: `/v0/drivers/${uuid}`,
    params
  })
}
// 获取驾驶员及其绑定的车辆信息
export function getDriverBind(uuid, params) {
  return request({
    url: `/v0/drivers/${uuid}/bind`,
    params
  })
}
// 禁用驾驶员
export function disableDriver(uuid, data) {
  return request({
    url: `/v0/drivers/${uuid}/disable`,
    method: 'post',
    data
  })
}
// 启用驾驶员
export function enableDriver(uuid, data) {
  return request({
    url: `/v0/drivers/${uuid}/enable`,
    method: 'post',
    data
  })
}