const {
	defaultClientSchema,
	defaultUserSchema,
	defaultGuildSchema,
} = require('klasa').Client;

function addUserSchema() {
	defaultUserSchema.add('levels', (schema) => {
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
}

function addGuildSchema() {
	defaultGuildSchema
		.add('roles', (schema) => {
			schema.add('moderator', 'role').add('muted', 'role');
		})
		.add('automod', (schema) => {
			schema
				.add('bannedWords', 'string', { array: true })
				.add('links', (schema) => {
					schema.add('channelWhitelist', 'channel', { array: true });
					schema.add('userWhitelist', 'channel', { array: true });
				})
				.add('invites', (schema) => {
					schema.add('channelWhitelist', 'channel', { array: true });
					schema.add('userWhitelist', 'channel', { array: true });
				});
		})
		.add('levels', (schema) => {
			schema
				.add('users', 'string', { array: true, configurable: false })
				.add('channelBlacklist', 'channel', { array: true });
		});
}

function addClientSchema() {}

export { addGuildSchema, addUserSchema, addClientSchema };
