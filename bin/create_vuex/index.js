const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const request = require('request')
const parse = require('../../lib/parse.js')
const codegen = require('./codegen.js')
const dirMethods = require('../../lib/utils')
const swaggerPath = 'http://172.16.4.29:9527/v2/api-docs'
// const swaggerPath = 'http://petstore.swagger.io/v2/swagger.json'

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
    const tagName = tag.name || ''
    const tagName1 = tagName.replace(tagName[0], tagName[0].toLowerCase())
    _.forEach(paths, (path, key) => {
      // 只有get方法才使用store
      const method = path.get
      if (method && method.tags.indexOf(tagName) > -1) {
        filterPath[key] = { get: method }
      }
    })
    temp.paths = filterPath
    const codeResult = codegen.vuexModule(parse({
      swagger: temp,
      moduleName: 'vuex',
      className: 'vuex',
      tag: tagName1
    }))
    fs.writeFileSync(`${dir}/${tagName1}.js`, codeResult)
  })
  // 生成index.js
  const codeResult = codegen.index({modules: tags})
  fs.writeFileSync(path.join(dir, '../index.js'), codeResult)
})
