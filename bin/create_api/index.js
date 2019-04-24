const request = require('request')
const swaggerGen = require('../../index.js')
const fs = require('fs')
const path = require('path')

const swaggerPath = 'http://172.16.4.29:9527/v2/api-docs';

request.get({
  url: swaggerPath,
  json: true
}, (e, res, body) => {
  const codeResult = swaggerGen({
    swagger: body,
    moduleName: 'api',
    className: 'api'
  })
  fs.writeFileSync(path.join(__dirname, '../../dist/api.js'), codeResult)
})
