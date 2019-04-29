'use strict'
let _ = require('lodash')
let normalizeName = function (id, m) {
  // 去掉Using + methodName
  // return id.replace(/\.|\-|\{|\}/g, '_').split(" ").join("_").slice(0, -(m.length + 5))
  return id.replace(/\.|\-|\{|\}/g, '_').split(" ").join("_")
}

let getPathToMethodName = function (opts, m, path) {
  if (path === '/' || path === '') {
    return m
  }

  // clean url path for requests ending with '/'
  let cleanPath = path.replace(/\/$/, '')

  let segments = cleanPath.split('/').slice(1)
  segments = _.transform(segments, function (result, segment) {
    if (segment[0] === '{' && segment[segment.length - 1] === '}') {
      segment = 'by' + segment[1].toUpperCase() + segment.substring(2, segment.length - 1)
    }
    result.push(segment)
  })
  let result = _.camelCase(segments.join('-'))
  return m.toLowerCase() + result[0].toUpperCase() + result.substring(1)
}

let getViewForSwagger2 = function (opts) {
  let swagger = opts.swagger
  let authorizedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'COPY', 'HEAD', 'OPTIONS', 'LINK', 'UNLIK', 'PURGE', 'LOCK', 'UNLOCK', 'PROPFIND']
  let data = {
    description: swagger.info.description,
    isSecure: swagger.securityDefinitions !== undefined,
    moduleName: opts.moduleName,
    className: opts.className,
    fileName: opts.tag,
    imports: opts.imports,
    domain: (swagger.schemes && swagger.schemes.length > 0 && swagger.host && swagger.basePath) ? swagger.schemes[0] + '://' + swagger.host + swagger.basePath.replace(/\/+$/g, '') : '',
    methods: [],
    definitions: []
  }

  _.forEach(swagger.paths, function (api, path) {
    let globalParams = []
    /**
     * @param {Object} op - meta data for the request
     * @param {string} m - HTTP method name - eg: 'get', 'post', 'put', 'delete'
     */
    _.forEach(api, function (op, m) {
      if (m.toLowerCase() === 'parameters') {
        globalParams = op
      }
    })
    _.forEach(api, function (op, m) {
      const m1 = m.toLowerCase()
      if (authorizedMethods.indexOf(m.toUpperCase()) === -1) {
        return
      }
      let method = {
        path: path,
        className: opts.className,
        methodName: op.operationId ? normalizeName(op.operationId, m) : getPathToMethodName(opts, m, path),
        method: m1,
        isGet: m1 === 'get',
        isPost: m1 === 'post',
        isData: m1 === 'post' || m1 === 'put' || m1 === 'patch', // axios 使用 data
        summary: op.summary,
        description: op.description,
        tags: op.tags,
        externalDocs: op.externalDocs,
        isSecure: swagger.security !== undefined || op.security !== undefined,
        parameters: [],
        res_body: '', 
        headers: [],
        variable:  /\{.*\}/.test(path) // 判断是否有路径参数
      }

      if (op.produces) {
        let headers = []
        headers.value = []

        headers.name = 'Accept'
        headers.value.push(op.produces.map(function (value) { return '\'' + value + '\'' }).join(', '))

        method.headers.push(headers)
      }

      let consumes = op.consumes || swagger.consumes
      if (consumes) {
        method.headers.push({ name: 'Content-Type', value: '\'' + consumes + '\'' })
      }

      let params = []
      if (_.isArray(op.parameters)) {
        params = op.parameters
      }
      params = params.concat(globalParams)
      _.forEach(params, function (parameter) {
        // Ignore parameters which contain the x-exclude-from-bindings extension
        if (parameter['x-exclude-from-bindings'] === true) {
          return
        }

        // Ignore headers which are injected by proxies & app servers
        // eg: https://cloud.google.com/appengine/docs/go/requests#Go_Request_headers
        if (parameter['x-proxy-header'] && !data.isNode) {
          return
        }
        if (_.isString(parameter.$ref)) {
          let segments = parameter.$ref.split('/')
          parameter = swagger.parameters[segments.length === 1 ? segments[0] : segments[2]]
        }
        parameter.camelCaseName = _.camelCase(parameter.name)
        if (parameter.enum && parameter.enum.length === 1) {
          parameter.isSingleton = true
          parameter.singleton = parameter.enum[0]
        }
        if (parameter.in === 'body') {
          parameter.isBodyParameter = true
        } else if (parameter.in === 'path') {
          parameter.isPathParameter = true
        } else if (parameter.in === 'query') {
          if (parameter['x-name-pattern']) {
            parameter.isPatternType = true
            parameter.pattern = parameter['x-name-pattern']
          }
          parameter.isQueryParameter = true
        } else if (parameter.in === 'header') {
          parameter.isHeaderParameter = true
        } else if (parameter.in === 'formData') {
          parameter.isFormParameter = true
        }
        parameter.cardinality = parameter.required ? '' : '?'
        method.parameters.push(parameter)
      })      
      //处理response
      let responses = handleResponse(op.responses).match(/\#\/definitions\/(.*)\"/)
      method.res_body = responses ? responses[1].replace(responses[1][0], responses[1][0].toLowerCase()) : ''
      data.methods.push(method)
    })
  })

  return data
}

function handleResponse(responses) {
  let res_body = ''
  if (!responses || typeof responses !== 'object') {
    return res_body
  }
  let codes = Object.keys(responses)
  let curCode
  if (codes.length > 0) {
    if (codes.indexOf('200') > -1) {
      curCode = '200'
    } else curCode = codes[0]

    let res = responses[curCode]
    if (res && typeof res === 'object') {
      if (res.schema) {
        res_body = JSON.stringify(res.schema, null, 2)
      } else if (res.description) {
        res_body = 'res.description'
      }
    } else if (typeof res === 'string') {
      res_body = res
    } else {
      res_body = ''
    }
  } else {
    res_body = ''
  }
  return res_body
}

module.exports = getViewForSwagger2
