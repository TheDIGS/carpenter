const { KlasaClient } = require('klasa');
const { config, token } = require('./config');
const { addGuildSchema, addUserSchema, addClientSchema } = require('./schema');

class Client extends KlasaClient {
	constructor(...args) {
		super(...args);

		// props

		return this;
	}

	async start() {
		await addGuildSchema();
		await addUserSchema();
		await addClientSchema();
	}
}

const client = new Client(config);

client.start();

client.login(token);
