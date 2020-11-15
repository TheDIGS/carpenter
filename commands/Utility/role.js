const {Command} = require('klasa');

module.exports = class extends Command {
	
	constructor(...args) {
		super(...args, {
			name: 'role',
			description: 'Add & remove roles from users.',
			permissionLevel: 5,
			usage: '<add|remove|show> <target:member> <roles:role> [...]',
			usageDelim: ' ',
			subcommands: true,
		})
	}

	async add(message, [target, roles]) {
		 
	}

	async remove(message, [target, roles]) {

	}

	async show(message, [target, roles]) {

	}

}