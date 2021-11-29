#!/usr/bin/env node

const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');
const chalk = require('chalk');
const logSymbols = require('log-symbols');


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
${chalk.green.bold.inverse(' Debapriya Majumder ')}

${chalk.italic("Undergard Student at Jalpaiguri Government Enginnering College")}

🔗 ${chalk.hex(`0077b5`).bold(" Linkedin ")} : ${chalk.dim("https://www.linkedin.com/in/debapriya-majumder-950184135")}
🔗 ${chalk.hex(`6e5494`).bold(" Codeforces ")} : ${chalk.dim("https://codeforces.com/profile/guddu75")}
🔗 ${chalk.hex(`00bce4`).bold(" Codechef ")} : ${chalk.dim("https://www.codechef.com/users/guddu75")}
🔗 ${chalk.hex(`c9510c`).bold(" Github ")} : ${chalk.dim("https://github.com/guddu75")}
🔗 ${chalk.hex(`0abf53`).bold(" Leetcode ")} : ${chalk.dim("https://leetcode.com/guddu75/")}

`);