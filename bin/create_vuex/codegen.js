const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const beautify = require('js-beautify').js_beautify
const indexTemplate = fs.readFileSync(path.join(__dirname, './template/index.hbs'), 'utf-8')
const moduleTemplate = fs.readFileSync(path.join(__dirname, './template/module.hbs'), 'utf-8')
const state = fs.readFileSync(path.join(__dirname, './template/state.hbs'), 'utf-8')
const getters = fs.readFileSync(path.join(__dirname, './template/getters.hbs'), 'utf-8')
const actions = fs.readFileSync(path.join(__dirname, './template/actions.hbs'), 'utf-8')
const mutations = fs.readFileSync(path.join(__dirname, './template/mutations.hbs'), 'utf-8')
Handlebars.registerPartial('state', state)
Handlebars.registerPartial('getters', getters)
Handlebars.registerPartial('actions', actions)
Handlebars.registerPartial('mutations', mutations)

/* Handlebars.registerHelper('getVariable', function (path){
  return path.match(/\{.*\}/g)[0].slice(1, -1)
}) */

const index = function (data) {
  let template = Handlebars.compile(indexTemplate)(data)
  template = beautify(template, {indent_size: 2, max_preserve_newlines: -1})
  return template
}
const vuexModule = function (data) {
  let template = Handlebars.compile(moduleTemplate)(data)
  template = beautify(template, {indent_size: 2, max_preserve_newlines: -1})
  return template
}
module.exports = {
  index, vuexModule
}
