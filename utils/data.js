const chalk = require('chalk');

const name = chalk.green.bold.inverse(' Debapriya Majumder ');

const bio = chalk.italic("Undergard Student at Jalpaiguri Government Enginnering College");

const social = `
🔗 ${chalk.hex(`0077b5`).bold(" Linkedin ")} : ${chalk.dim("https://www.linkedin.com/in/debapriya-majumder-950184135")}
🔗 ${chalk.hex(`6e5494`).bold(" Codeforces ")} : ${chalk.dim("https://codeforces.com/profile/guddu75")}
🔗 ${chalk.hex(`00bce4`).bold(" Codechef ")} : ${chalk.dim("https://www.codechef.com/users/guddu75")}
🔗 ${chalk.hex(`c9510c`).bold(" Github ")} : ${chalk.dim("https://github.com/guddu75")}
🔗 ${chalk.hex(`0abf53`).bold(" Leetcode ")} : ${chalk.dim("https://leetcode.com/guddu75/")}
`;

module.exports = {
    name,
    bio,
    social
}