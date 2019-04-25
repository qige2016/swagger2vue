import request from '@/utils/request'
// 查询运营平台账号
export function searchOperators(params) {
  return request({
    url: '/v0/operators',
    params
  })
}
// 增加运营平台账号
export function addOperators(data) {
  return request({
    url: '/v0/operators',
    method: 'post',
    data
  })
}
// 修改运营平台账号
export function modifyOperators(uuid, data) {
  return request({
    url: `/v0/operators/${uuid}`,
    method: 'post',
    data
  })
}
// 禁用运营平台账号
export function disableOperator(uuid, data) {
  return request({
    url: `/v0/operators/${uuid}/disable`,
    method: 'post',
    data
  })
}
// 启用运营平台账号
export function enableOperator(uuid, data) {
  return request({
    url: `/v0/operators/${uuid}/enable`,
    method: 'post',
    data
  })
}