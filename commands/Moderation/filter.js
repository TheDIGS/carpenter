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
}