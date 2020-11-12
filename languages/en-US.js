const {Language} = require('klasa');

module.exports = class extends Language {
	constructor(...args) {
		super(...args, {
			name: 'en-US',
			enabled: true
		});

		this.language = {
			COMMAND_PREFIX_DESCRIPTION: `Sets the bot prefix.`,
			COMMAND_MUTEROLE_DESCRIPTION: `Sets the muted role of the server.`
		}
	}
}