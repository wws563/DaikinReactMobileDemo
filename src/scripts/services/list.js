import request from '@/commons/request'

export function getFiles() {
  return request({
    url: '/getList/file',
    method: 'get'
  })
}
