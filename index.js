#!/usr/bin/env node

const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');

welcome({
	title: pkgJSON.name,
	tagLine: `Hi. 🙌 Nice to meet you`,
    description : pkgJSON.description,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: pkgJSON.version
});

console.log(`
Debapriya Majumder

Undergard Student at Jalpaiguri Government Enginnering College

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
 dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
 officia deserunt mollit anim id est laborum.


`);