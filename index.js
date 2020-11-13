require('dotenv').config();
const {KlasaClient} = require('klasa');

const client = new KlasaClient(require('./config'));

KlasaClient.defaultGuildSchema.add('roles', schema => schema.add('muted', 'role'));
KlasaClient.defaultUserSchema
	.add('experience', 'Integer', {
		default: 0,
		configurable: false
	})
	.add('level', 'Integer', {
		default: 0,
		configurable: false
	});

client.login(process.env.token);