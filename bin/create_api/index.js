const request = require('request')
const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const parse = require('../../lib/parse.js')
const codegen = require('./codegen.js')
const swaggerPath = 'http://172.16.4.43:9527/v2/api-docs';

request.get({
  url: swaggerPath,
  json: true
}, (e, res, body) => {
  const temp = body
  const tags = body.tags || []
  const paths = body.paths || []
  tags.forEach(function(tag) {
    const includeTag = {}
    _.forEach(paths, function(value, key) {
      const method = value.get || value.post || value.put || value.delete || value.patch || value.copy || value.head || value.options || value.link || value.unlink || value.purge || value.lock || value.unlock || value.propfind
      if (method.tags[0] === tag.name) {
        includeTag[key] = value
      }
    })
    temp.paths = includeTag
    const codeResult = codegen(parse({
      swagger: temp,
      moduleName: 'api',
      className: 'api'
    }))
    fs.writeFileSync(path.join(__dirname, `../../dist/${tag.name}.js`), codeResult)
  })
})
