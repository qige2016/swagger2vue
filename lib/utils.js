const fs = require('fs')
const path = require('path')

//递归创建目录 同步方法  
function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname)
      return true
    }
  }
}

//递归创建目录 异步方法  
function mkdirs(dirname, callback) {
  if (fs.existsSync(dirname)) {
    callback()
  } else {
    mkdirs(path.dirname(dirname), function () {
      fs.mkdir(dirname, callback)
    })
  }
}

module.exports = {
  mkdirs, mkdirsSync
}
