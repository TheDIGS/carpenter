const {PermissionLevels} = require('klasa');

module.exports = {
	prefix: ['!', '?'],
	commandLogging: true,
	defaultLanguage: 'en-US',
	prefixCaseInsensitive: true,
	owners: ['585813838490894346'],
	readyMessage: client => `Logged in as ${client.user.tag}. Ready to serve ${client.guilds.cache.size} guild(s).`,
	typing: true,
	noPrefixDM: true,
	console: {
		useColor: true
	},
	permissionLevels: new PermissionLevels()
		.add(0, () => true)
		.add(5, ({guild, member}) => guild && member.permissions.has('MANAGE_ROLES'), {fetch: true})
		.add(6, ({guild, member}) => guild && member.permissions.has('MANAGE_GUILD'), {fetch: true})
		.add(7, ({guild, member}) => guild && member === guild.owner, {fetch: true})
		.add(9, ({author, client}) => client.owners.has(author), {break: true})
		.add(10, ({author, client}) => client.owners.has(author)) 
}