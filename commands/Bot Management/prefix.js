const {Command} = require('klasa');

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			name: 'prefix',
			usage: '<mode:string> <prefix:string>',
			description: language => language.get('COMMAND_PREFIX_DESCRIPTION') 
		})
	}

	async run(message, [mode, prefix]) {}
}