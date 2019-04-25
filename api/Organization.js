import request from '@/utils/request'
// 查询运营企业列表
export function searchOrganizations(params) {
  return request({
    url: '/v0/organizations',
    params
  })
}
// 禁用运营企业
export function disableOrganization(uuid, data) {
  return request({
    url: `/v0/organizations/${uuid}/disable`,
    method: 'post',
    data
  })
}
// 启用运营企业
export function enableOrganization(uuid, data) {
  return request({
    url: `/v0/organizations/${uuid}/enable`,
    method: 'post',
    data
  })
}