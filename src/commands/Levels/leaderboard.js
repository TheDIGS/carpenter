const { Command } = require('klasa');
const { Collection } = require('discord.js');
const { readdirSync } = require('fs');

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'leaderboard',
		});
	}

	async run(message) {
		
	}
};
