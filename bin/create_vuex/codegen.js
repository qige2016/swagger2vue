const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const beautify = require('js-beautify').js_beautify
const indexTemplate = fs.readFileSync(path.join(__dirname, './template/index.hbs'), 'utf-8')
const moduleTemplate = fs.readFileSync(path.join(__dirname, './template/module.hbs'), 'utf-8')

Handlebars.registerHelper('getVariable', function (path){
  return path.match(/\{.*\}/g)[0].slice(1, -1)
})
// 首字母大写
Handlebars.registerHelper('initialUpperCase', function (name){
  return name.replace(name[0], name[0].toUpperCase())
})
// 驼峰转下划线
Handlebars.registerHelper('toLine', function (name){
  return name.replace(/([A-Z])/g,"_$1").toUpperCase()
})

const compile = function (temp, data) {
  let template = Handlebars.compile(temp)(data)
  template = beautify(template, {indent_size: 2, max_preserve_newlines: -1})
  return template
}
const index = function (data) {
  return compile(indexTemplate, data)
}
const vuexModule = function (data) {
  return compile(moduleTemplate, data)
}
module.exports = {
  index, vuexModule
}
