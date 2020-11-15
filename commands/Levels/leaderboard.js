const {Command} = require('klasa');
const {Collection} = require('discord.js');

module.exports = class extends Command {
	
	constructor(...args) {
		super(...args, {
			name: 'leaderboard'
		})
	}

	async run(message) {
		const users = this.client.users.cache;
		const ranks = new Collection();

		for (const user of users) {
			ranks.set(user.id, user);
		}
		
		console.log(ranks);
	}

}