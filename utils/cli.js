const meow = require('meow');
const {green,yellow,cyan,dim} = require('chalk');

const helpText = `
	Usage
        ${green('npx debapriya')} ${yellow('[--option]')} ${cyan('<command>')}
		
	Options
		${yellow('--bio')}	       Print bio ${dim('(DEFAULT: true)')}
		${yellow('--no-bio')}       Doesn't print bio
		${yellow('--social')}       Print socail ${dim('(DEFAULT: true)')}
       ${yellow('--clear')}        Clears console ${dim('(DEFAULT: true)')}
       ${yellow('--no-clear')}     Doesnot clears console
	      ${yellow('--no-social')}    Doesn't print socail
       ${yellow('--debug,-d')}     Print CLI debug info
       ${yellow('--version,-v')}   Print CLI version

    Commnads
        ${cyan('help')}          Print CLI help Information
	
	Examples
        ${green('npx debapriya')} ${yellow('--debug')}
        ${green('npx debapriya')} ${cyan('help')}

`;


const options = {
	flags : {
		bio : {
			type : 'boolean',
			default : true
		},
        clear : {
            type : 'boolean',
            default : true
        },
		social : {
			type : 'boolean',
			default : true
		},
        debug : {
            type : 'boolean',
            default : false,
            alias : 'd'
        },
        version : {
            type : 'boolean',
            default : false,
            alias : 'v'
        }
	}
}


module.exports = meow(helpText,options);