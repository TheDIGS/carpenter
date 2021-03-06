const { Command, Timestamp } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'server-info',
			runIn: ['text'],
			aliases: ['guild', 'serverinfo'],
			description: 'Get information about your current server.'
		});

		this.verificationLevels = [
			'None',
			'Low',
			'Medium',
			'(╯°□°）╯︵ ┻━┻',
			'┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
		];

		this.filterLevels = [
			'Off',
			'No Role',
			'Everyone'
		];
		this.timestamp = new Timestamp('d MMMM YYYY');
	}

	run(msg) {
		return msg.sendEmbed(new MessageEmbed()
			.setColor(msg.member.hexColor)
			.setThumbnail(msg.guild.iconURL({type: 'png', dynamic: true}))
			.addField('❯ Name', msg.guild.name, true)
			.addField('❯ ID', msg.guild.id, true)
			.addField('❯ Creation Date', this.timestamp.display(msg.guild.createdAt), true)
			.addField('❯ Region', msg.guild.region, true)
			.addField('❯ Explicit Filter', this.filterLevels[msg.guild.explicitContentFilter], true)
			.addField('❯ Verification Level', this.verificationLevels[msg.guild.verificationLevel], true)
			.addField('❯ Owner', msg.guild.owner ? msg.guild.owner.user.tag : 'None', true)
			.addField('❯ Members', msg.guild.memberCount, true));
	}

};