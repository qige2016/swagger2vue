const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const beautify = require('js-beautify').js_beautify
const apiTemplate = fs.readFileSync(path.join(__dirname, './template/api.hbs'), 'utf-8')
const methods = fs.readFileSync(path.join(__dirname, './template/methods.hbs'), 'utf-8')
const method = fs.readFileSync(path.join(__dirname, './template/method.hbs'), 'utf-8')
Handlebars.registerPartial('methods', methods)
Handlebars.registerPartial('method', method)
Handlebars.registerHelper('pathParameter', function (path){
  return path.replace('{', '${')
})
Handlebars.registerHelper('getVariable', function (path){
  return path.match(/\{.*\}/g)[0].slice(1, -1)
})

module.exports = function (data) {
  let template = Handlebars.compile(apiTemplate)(data)
  template = beautify(template, {indent_size: 2, max_preserve_newlines: -1})
  return template
}
