const {Command} = require('klasa');

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			name: 'level',
			usage: '[user:user]',
			description: language => language.get('COMMAND_LEVEL_DESCRIPTION')
		})
	}

	run(message, [user]) {
		if (user) {
			return message.send(`**Info for ${user.tag}**\nExperience: ${user.settings.experience}\nLevel: ${user.settings.level}`);
		};

		return message.send(`**Info for ${message.author.tag}**\nExperience: ${message.author.settings.experience}\nLevel: ${message.author.settings.level}`);
	}
}