import {Command} from 'klasa';
import {MessageEmbed} from 'discord.js';

export default class extends Command {
	
	constructor(...args) {
		super(...args, {
			name: 'placeholder',
			event: 'guildCreate'
		})
	}

	async run(message) {
		const channel = message.guild.channels.cache.filter(c => c.type === 'text').find(x => x.position == 0);

		return channel.sendEmbed(new MessageEmbed()
		.setTitle(`Thanks for adding me to your server!`));
	}
}