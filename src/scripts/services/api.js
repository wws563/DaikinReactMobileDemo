import request from '@/scripts/axios/request';

function getFiles() {
  debugger
  return request({
    url: '/getList/file',
    method: 'get'
  })
}

export {
  getFiles
}
