import request from '@/utils/request'
// 获取某个行程的轨迹点数据
export function getTracks(uuid, params) {
  return request({
    url: `/v0/trackstatistics/${uuid}/tracks`,
    params
  })
}