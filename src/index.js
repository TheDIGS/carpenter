const { KlasaClient } = require('klasa');
const { config, token } = require('./config');

class Client extends KlasaClient {
	constructor(...args) {
		super(...args);

		// props

		return this;
	}

	// methods
}

Client.defaultGuildSchema
	.add('roles', (schema) => {
		schema.add('moderator', 'role').add('muted', 'role');
	})
	.add('levels', (schema) => {
		schema
			.add('channelBlacklist', 'channel', {
				array: true,
				configurable: false,
			})
			.add('roleRewards', 'any', { array: true });
	})
	.add('bannedWords', 'string', { array: true })
	.add('automod', (schema) => {
		schema
			.add('links', (schema) => {
				schema
					.add('channelBlacklist', 'channel', { array: true })
					.add('userBlacklist', 'user', { array: true });
			})
			.add('links', (schema) => {
				schema
					.add('channelBlacklist', 'channel', { array: true })
					.add('userBlacklist', 'user', { array: true });
			});
	});

Client.defaultUserSchema.add('levels', (schema) => {
	schema
		.add('experience', 'Integer', {
			default: 0,
			configurable: false,
		})
		.add('fullExperience', 'Integer', {
			default: 0,
			configurable: false,
		})
		.add('level', 'Integer', {
			default: 0,
			configurable: false,
		})
		.add('lastMessage', 'Integer', {
			default: 0,
			configurable: false,
		});
});

const client = new Client(config);

client.login(token);
