const {Command} = require('klasa');

module.exports = class extends Command {
	constructor(...args) {
		super(...args, {
			name: 'muterole',
			permissionLevel: 7,
			usage: '<role:role>'
		})
	}

	async run(message, [role]) {
		await message.guild.settings.update('roles.muted', role, message.guild);

		return message.send(`Successfully changed muterole to ${role.name}.`);
	}
}