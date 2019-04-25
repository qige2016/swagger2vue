import request from '@/utils/request'
// 获取城市列表
export function helloWorld(data) {
  return request({
    url: '/v0/cities',
    method: 'post',
    data
  })
}