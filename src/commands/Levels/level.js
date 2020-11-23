const {Command} = require('klasa');
const {MessageEmbed} = require('discord.js');

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			name: 'level',
			usage: '[user:user]',
			description: language => language.get('COMMAND_LEVEL_DESCRIPTION')
		})
	}

	run(message, [user]) {
		const embed = new MessageEmbed()
			.setColor(message.member.displayHexColor)
			.setAuthor(message.author.tag, message.author.avatarURL({format: 'png', dynamic: true}))
			.setFooter(message.guild.name, message.guild.iconURL({format: 'png', dynamic: true}))
			.setTimestamp();
		const {tag, settings} = message.author;

		if (user) {
			if (user.id === this.client.user.id) throw `I don't get experience, I'm a bot!`;
			if (user.bot) throw `That user is a bot, they don't get experience!`;

			embed.setTitle(`Info for ${user.tag}`).setDescription(`**Experience**: ${user.settings.levels.experience}\n**Level**: ${user.settings.levels.level}`);

			return message.send(embed);
		};

		embed.setTitle(`Info for ${message.author.tag}`).setDescription(`**Experience**: ${settings.levels.experience}\n**Level**: ${settings.levels.level}`);

		return message.send(embed)
	}
}