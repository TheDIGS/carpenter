const { MessageEmbed } = require('discord.js');
const { Command } = require('klasa');

module.exports = class extends (
	Command
) {
	constructor(...args) {
		/**
		 * Any default options can be omitted completely.
		 * if all options are default, you can omit the constructor completely
		 */
		super(...args, {
			enabled: true,
			runIn: ['text', 'dm', 'group'],
			requiredPermissions: [],
			requiredSettings: [],
			aliases: [],
			autoAliases: true,
			bucket: 1,
			cooldown: 0,
			promptLimit: 0,
			promptTime: 30000,
			deletable: false,
			guarded: false,
			nsfw: false,
			permissionLevel: 6,
			description: '',
			extendedHelp: 'No extended help available.',
			usage: '<role:role>',
			usageDelim: undefined,
			quotedStringSupport: false,
			subcommands: false,
		});
	}

	async run(message, [role]) {
		const oldRole = message.guild.settings.get('roles.moderator');
		console.log(oldRole);
		await message.guild.settings.update(
			'roles.moderator',
			role,
			message.guild
		);

		console.log(message.guild.settings);

		return message.send(
			new MessageEmbed()
				.setTitle(`Update Successful`)
				.setDescription(`Updated the moderator role to ${role}.`)
		);
	}
};
