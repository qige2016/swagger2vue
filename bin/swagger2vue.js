#!/usr/bin/env node

const program = require('commander')
const config = require('../package.json')
const inquirer = require('inquirer') // 命令行交互
const create_api = require('./create_api/index')
const create_vuex = require('./create_vuex/index')

program.version(config.version, '-V, --version')
	.option('-a, --api', 'parse2api')
  .option('-v, --vuex', 'parse2vuex')
	.action(function (options){
		if (options.api) {
			inquirer.prompt([
				{
					name: 'input',
					message: '请输入swagger.json的url'
				}
			]).then(answers => {
				create_api(answers.input)
			})
		}
		if (options.vuex) {
			inquirer.prompt([
				{
					name: 'input',
					message: '请输入swagger.json的url',
				}
			]).then(answers => {
				create_vuex(answers.input)
			})
		}
	})
	.parse(process.argv)