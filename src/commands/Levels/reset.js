const {Command} = require('klasa');

module.exports = class X extends Command {
	constructor(...args) {
		super(...args, {
			name: 'reset',
			description: `Resets a user's level and experience.`,
			permissionLevel: 10,
			usage: '<user:user>',
			usageDelim: ' '
		})
	}

	async run(message, [user]) {
		message.send(`Resetting...`);
		
		await user.settings.update({levels: {experience: 0, fullExperience: 0, level: 0, lastMessage: 0}});
	
		message.send(`Reset settings for ${user.tag} successfully.`);
	}
}