const {Command} = require('klasa');

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			name: 'emit',
			permissionLevel: '10'
		})
	}

	async run(message) {
		this.client.emit('guildCreate');
	}
}