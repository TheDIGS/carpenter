const {Command} = require('klasa');
const {MessageEmbed} = require('discord.js');

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			name: 'prefix',
			usage: '<add|remove|show|clear> [prefix:string]',
			usageDelim: ' ',
			description: language => language.get('COMMAND_PREFIX_DESCRIPTION'),
			permissionLevel: 7,
			subcommands: true,
		})
	}

	async add(message, [prefix]) {
		let settings = message.guild.settings;

		if (settings.prefix.includes(prefix)) throw `That prefix already exists!`;

		await settings.update('prefix', prefix);

		return message.send(`Added prefix ${prefix} to your guild settings.`);
	}
	
	async remove(message, [prefix]) {
		let settings = message.guild.settings;

		if (!settings.prefix.includes(prefix)) throw `That prefix doesn't exist!`;

		await settings.update('prefix', prefix);

		return message.send(`Removed prefix ${prefix} from your guild settings.`);
	}

	async show(message, prefix) {
		let settings = message.guild.settings;

		return message.send(`Your prefixes are: [ ** ${settings.prefix.join(`** | **`)} ** ]`);
	}

	async clear(message) {}

}