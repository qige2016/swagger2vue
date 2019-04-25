const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const request = require('request')
const parse = require('../../lib/parse.js')
const codegen = require('./codegen.js')
const dirMethods = require('../../lib/utils')
const swaggerPath = 'http://petstore.swagger.io/v2/swagger.json';

request.get({
  url: swaggerPath,
  json: true
}, (e, res, body) => {
  const temp = body
  const tags = body.tags || []
  const paths = body.paths || {}
  const dir = path.join(__dirname, '../../api')
  dirMethods.mkdirsSync(dir) // 创建目录，同步方法
  // 根据tag分文件
  _.forEach(tags, (tag) => {
    const filterPath = {}
    _.forEach(paths, (path, key) => {
      const method = path.get || path.post || path.put || path.delete || path.patch || path.copy || path.head || path.options || path.link || path.unlink || path.purge || path.lock || path.unlock || path.propfind
      if (method && method.tags.indexOf(tag.name) > -1) {
        filterPath[key] = path
      }
    })
    temp.paths = filterPath
    const codeResult = codegen(parse({
      swagger: temp,
      moduleName: 'api',
      className: 'api'
    }))
    fs.writeFileSync(`${dir}/${tag.name}.js`, codeResult)
  })
})
