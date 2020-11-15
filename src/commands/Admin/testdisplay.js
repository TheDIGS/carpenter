const {Command, RichDisplay} = require('klasa');
const {MessageEmbed} = require('discord.js');

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			name: 'testdisplay'
		})
	}

	run(message) {
		const display = new RichDisplay(new MessageEmbed());

		display.setTitle(`Title`)

		return message.send(display);
	}
}