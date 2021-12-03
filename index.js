#!/usr/bin/env node

const init = require('./utils/init');
const data = require('./utils/data');
const cli = require('./utils/cli');
const debug = require('./utils/debug');

const flags = cli.flags;
const inputs = cli.input;


(async () => {
	init(flags.clear);
	inputs.includes('help') && cli.showHelp(0);
	console.log(data.name);
	console.log();
	flags.bio && console.log(data.bio);
	flags.social && console.log(data.social);
	debug(flags.debug,cli);

})();

