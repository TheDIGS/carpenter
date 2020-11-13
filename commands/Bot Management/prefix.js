const {Command} = require('klasa');
const {MessageEmbed} = require('discord.js');

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			name: 'prefix',
			usage: '<mode:string> [prefix:string]',
			usageDelim: ' ',
			description: language => language.get('COMMAND_PREFIX_DESCRIPTION') 
		})
	}

	async run(message, [mode, prefix]) {
		let settings = message.guild.settings;
		
		if (mode === 'add') {
			if (settings.get('prefix').includes(prefix)) throw `That prefix already exists!`;
			
			await settings.update('prefix', prefix);

			return message.sendMessage(`Added prefix ${prefix} successfully.`);
		} else if (mode === 'remove') {
			if (!settings.get('prefix').includes(prefix)) throw `It seems like that prefix doesn't exist.`;

			await settings.update('prefix', prefix);

			return message.send(`Removed prefix ${prefix} successfully.`)
		} else if (mode === 'show' || !mode) {
			return message.sendEmbed(new MessageEmbed()
				.setDescription(``)
			)
		}

	}
}