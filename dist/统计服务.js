import request from '@/utils/request'
export function getTracks(uuid, params) {
  return request({
    url: `/v0/trackstatistics/${uuid}/tracks`,
    params
  })
}