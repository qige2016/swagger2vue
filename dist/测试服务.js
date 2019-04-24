import request from '@/utils/request'
export function helloWorld(data) {
  return request({
    url: '/v0/cities',
    method: 'post',
    data
  })
}