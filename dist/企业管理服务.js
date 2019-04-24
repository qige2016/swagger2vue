import request from '@/utils/request'
export function searchOrganizations(params) {
  return request({
    url: '/v0/organizations',
    params
  })
}
export function disableOrganization(uuid, data) {
  return request({
    url: `/v0/organizations/${uuid}/disable`,
    method: 'post',
    data
  })
}
export function enableOrganization(uuid, data) {
  return request({
    url: `/v0/organizations/${uuid}/enable`,
    method: 'post',
    data
  })
}