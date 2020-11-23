const {Command} = require('klasa');
const {Collection} = require('discord.js');
const {readdirSync} = require('fs');

module.exports = class extends Command {
	
	constructor(...args) {
		super(...args, {
			name: 'leaderboard'
		})
	}

	async run(message) {
		const ranks = new Collection();
		
		const rankFiles = await readdirSync('/home/runner/carpenterjs/bwd/provider/json/users');

		for (const file of rankFiles) {
			const rank = require(`/home/runner/carpenterjs/bwd/provider/json/users/${file}`);

			await ranks.set(rank.id, rank);
		};

		console.log(JSON.stringify(ranks, null, 4));
	}

}

JSON.stringify()