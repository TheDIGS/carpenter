const {Monitor} = require('klasa');

module.exports = class extends Monitor {
	constructor(...args) {
		super(...args, {
			ignoreOthers: false,
			ignoreEdits: false,
		});
	}

	async run(message) {
		const bannedWords = message.guild.settings.bannedWords;

		for (const word of bannedWords) {
			if (message.content.includes(word)) {
				message.delete();
				return message.send(`That word isn't allowed, **${message.author.tag}**!`)
					.then(message => message.delete({timeout: 5000}));
			}
		}
	}
}