require('dotenv').config();
const {KlasaClient} = require('klasa');

const client = new KlasaClient(require('./config'));

KlasaClient.defaultGuildSchema
	.add('roles', schema => {
		schema.add('moderator', 'role');
		schema.add('muted', 'role');
	})
	.add('levels', schema => {
		schema.add('channelBlacklist', 'channel', {array: true, configurable: false});
	});

KlasaClient.defaultUserSchema.add('levels', schema => {
	schema.add('experience', 'Integer', {
		default: 0,
		configurable: false
	});
	schema.add('fullExperience', 'Integer', {
		default: 0,
		configurable: false
	});
	schema.add('level', 'Integer', {
		default: 0,
		configurable: false
	});
	schema.add('lastMessage', 'Integer', {
		default: 0,
		configurable: false
	});
});

client.login(process.env.token);