const {Command} = require('klasa');
const {MessageEmbed} = require('discord.js');

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			name: 'ping'
		})
	}

	async run(message) {
		message.sendEmbed(new MessageEmbed()
			.setTitle(`Pong!`)
			.setDescription(`Carpenter is running at ${this.client.ws.ping} ms.`)
		)
	}
}