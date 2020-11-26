const { Monitor } = require('klasa');

module.exports = class extends (
	Monitor
) {
	constructor(...args) {
		/**
		 * Any default options can be omitted completely.
		 * if all options are default, you can omit the constructor completely
		 */
		super(...args, {
			enabled: true,
			ignoreBots: true,
			ignoreSelf: true,
			ignoreOthers: false,
			ignoreWebhooks: true,
			ignoreEdits: true,
		});
	}

	async run(message) {
        const linksBlacklist = await message.guild.settings.get('automod.linksChannelBlacklist')
        
        const linksRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
		const invitesRegex = /discord(?:\.com|app\.com|\.gg)[\/invite\/]?(?:[a-zA-Z0-9\-]{2,32})/;

		let containsLink = message.content.includes(linksRegex);
		let containsInvite = message.content.includes(invitesRegex);

		if (containsLink) {
			await message.delete();
			return message.channel.send(
				`Links aren't allowed in this channel, **${message.author.tag}**!`
			);
		} else if (containsInvite) {
			await message.delete();
			return message.channel.send(
				`Invites aren't allowed in this channel, **${message.author.tag}**!`
			);
		}
	}

	async init() {
		/*
		 * You can optionally define this method which will be run when the bot starts
		 * (after login, so discord data is available via this.client)
		 */
	}
};
