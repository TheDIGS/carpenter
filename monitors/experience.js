const {Monitor} = require('klasa');

module.exports = class extends Monitor {
	
	constructor(...args) {
		super(...args, {
			ignoreOthers: false
		})
	}

	async run(message) {
		const blacklist = message.guild.settings
		
		let userStats = message.author.settings;
		
		if (Date.now() - userStats.levels.lastMessage > 0) {	
			let newXP = userStats.levels.experience + require('random').int(15, 25);
			
			await userStats.update('levels.experience', newXP);
			await userStats.update('levels.lastMessage', Date.now());
			await userStats.update('levels.fullExperience', newXP);

			const xpToNextLevel = 5 * Math.pow(userStats.levels.level, 2) + 50 * userStats.get('levels.level') + 100;

			if (userStats.levels.experience >= xpToNextLevel) {
				let newLevel = userStats.levels.level + 1;
				let resetXP = userStats.levels.experience - xpToNextLevel;

				await userStats.update('levels.level', newLevel);

				await userStats.update('levels.experience', resetXP);
				message.send(`**${message.author}** has reached level **${userStats.levels.level}**!`);
			};
		};
	}

}