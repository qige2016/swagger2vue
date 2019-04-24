import request from '@/utils/request'
export function searchOperators(params) {
  return request({
    url: '/v0/operators',
    params
  })
}
export function addOperators(data) {
  return request({
    url: '/v0/operators',
    method: 'post',
    data
  })
}
export function modifyOperators(uuid, data) {
  return request({
    url: `/v0/operators/${uuid}`,
    method: 'post',
    data
  })
}
export function disableOperator(uuid, data) {
  return request({
    url: `/v0/operators/${uuid}/disable`,
    method: 'post',
    data
  })
}
export function enableOperator(uuid, data) {
  return request({
    url: `/v0/operators/${uuid}/enable`,
    method: 'post',
    data
  })
}