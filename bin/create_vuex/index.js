const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const request = require('request')
const parse = require('../../lib/parse.js')
const codegen = require('./codegen.js')
const dirMethods = require('../../lib/utils')
const swaggerPath = 'http://172.16.4.43:9527/v2/api-docs'

request.get({
  url: swaggerPath,
  json: true
}, (e, res, body) => {
  const temp = body
  const tags = body.tags || []
  const paths = body.paths || {}
  const dir = path.join(__dirname, '../../store/modules')
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
    const codeResult = codegen.vuexModule(parse({
      swagger: temp,
      moduleName: 'vuex',
      className: 'vuex'
    }))
    fs.writeFileSync(`${dir}/${tag.name}.js`, codeResult)
  })
  // 生成index.js
  const codeResult = codegen.index({modules: tags})
  fs.writeFileSync(path.join(dir, '../index.js'), codeResult)
})
