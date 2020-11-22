const {Command} = require('klasa');

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			name: 'filter',
			description: 'Edit the message filter.',
			permissionLevel: 6,
			usage: '<words:string> [...]'
		})
	}

	async run(message, [words]) {
		const args = words.split(/ +/);

		await message.guild.settings.update('bannedWords', args);

		return message.send(`Added ${args.join(', ')} to the banned words filter.`);
	}

	getFilter(msg, filter, user) {
		switch (filter) {
			case 'link': return mes => /https?:\/\/[^ /.]+\.[^ /.]+/.test(mes.content);
			case 'invite': return mes => /(https?:\/\/)?(www\.)?(discord\.(gg|li|me|io)|discordapp\.com\/invite)\/.+/.test(mes.content);
			case 'bots': return mes => mes.author.bot;
			case 'you': return mes => mes.author.id === this.client.user.id;
			case 'me': return mes => mes.author.id === msg.author.id;
			case 'upload': return mes => mes.attachments.size > 0;
			case 'user': return mes => mes.author.id === user.id;
			default: return () => true;
		}
	}
}