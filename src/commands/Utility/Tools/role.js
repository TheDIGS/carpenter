const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'role',
			description: 'Add & remove roles from users.',
			permissionLevel: 5,
			usage: '<add|remove|show> <target:member> <role:role>',
			usageDelim: ' ',
			subcommands: true,
		});

		this.customizeResponse('target', `You didn't give me a target user...`);
	}

	async add(message, [target, role]) {
		await target.roles.add(role);

		return message.send(`Added ${role.name} to ${target.user.tag}.`);
	}

	async remove(message, [target, role]) {
		await target.roles.remove(role);

		return message.send(`Removed ${role.name} from ${target.user.tag}.`);
	}

	async show(message, [target, role]) {
		let rolemap = message.member.roles.cache
			.map((r) => '`' + r.name + '`')
			.join(' ');

		if (!rolemap) throw `That user doesn't have any roles!`;

		for (let i = 0; i < rolemap.length; i += 2000) {
			const toSend = rolemap.substring(
				i,
				Math.min(rolemap.length, i + 2000)
			);
			message.channel.send(toSend);
		}
	}
};
