const {Command} = require('klasa');

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			name: 'presence',
			usage: '<set|reset|show:default> [type:string] [name:string] [url:url]',
			usageDelim: ' ',
			subcommands: true,
			permissionLevel: 9,
		})
	}

	async set(message, [type, name, url]) {
		if (!type || !name) throw `You have't specified the presence data!`;
		
		if (type.toUpperCase() === 'STREAMING') {
			await this.client.user.setPresence({activity: {name: name, type: 'STREAMING', url: url}});

			return message.send(`Set presence successfully to STREAMING.`)
		}

		await this.client.user.setPresence({activity: {name: name, type: type.toUpperCase()}});

		return message.send(`Set presence successfully.`)
	}

	async show(message) {
		const json = JSON.stringify(this.client.user.presence, null, 4);

		return message.send(`Here's the full object for the ClientUser's presence:\n\n${json}`);
	}
}