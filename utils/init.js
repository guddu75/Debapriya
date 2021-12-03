const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');
const welcome = require('cli-welcome');
const pkgJSON = require('../package.json');
module.exports = (clear) => {
    unhandled();
    welcome({
        title: pkgJSON.name,
        tagLine: `Hi. 🙌 Nice to meet you`,
        description : pkgJSON.description,
        bgColor: `#FADC00`,
        color: `#000000`,
        bold: true,
        clear,
        version: pkgJSON.version
    });
    checkNode('12');
}