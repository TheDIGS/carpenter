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
}