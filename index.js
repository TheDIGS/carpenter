require('dotenv').config();
const {KlasaClient} = require('klasa');

const client = new KlasaClient(require('./config'));

KlasaClient.defaultGuildSchema.add('roles', schema => schema.add('muted', 'role'));



client.login(process.env.token);