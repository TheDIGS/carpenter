const {Command} = require('klasa');
const {MessageEmbed} = require('discord.js');

module.exports = class extends Command {
	
	constructor(...args) {
		super(...args, {
			name: 'invite',
			description: 'Get the bot\'s invite code.',
			usage: '[permissions:number]',
			extendedHelp: `If you know what permissions integer you want, you can use it in the \`permissions\` field of the usage. Otherwise, specify nothing and it defaults to 8 (Administrator).`
		})
	}

	async run(message, [permissions]) {
		if (!permissions) perms = 8;
		
		const embed = new MessageEmbed()
			.setTitle(`Click here to invite me!`)
			.setURL(`https://discord.com/oauth2/authorize?client_id=${this.client.user.id}&scope=bot&permissions=${permissions}`)
			.setDescription(`If you would like to paste the link, here it is: ${this.url}`)
			.addField(`Other links`, `Carpenter's discord: `)
	}

}