const {Command, RichDisplay} = require('klasa');
const {MessageEmbed} = require('discord.js');

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			name: 'testdisplay',
			usage: '<arg1:string> <arg2:string> <arg3:string> [...]',
			usageDelim: ' ',
		})
	}

	run(message) {
		return message.send(`I'm running at **${this.client.ws.ping}** ms!`);	
	}
}