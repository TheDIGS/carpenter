const { Client } = require('klasa');
const { config, token } = require('./config');

class MyKlasaClient extends Client {
    constructor(...args) {
        super(...args);

        // Add any properties to your Klasa Client
    }

    // Add any methods to your Klasa Client
}

MyKlasaClient.defaultGuildSchema
    .add('roles', (schema) => {
        schema.add('moderator', 'role');
        schema.add('muted', 'role');
    })
    .add('levels', (schema) => {
        schema.add('channelBlacklist', 'channel', {
            array: true,
            configurable: false,
        });
    })
    .add('bannedWords', 'string', { array: true });

MyKlasaClient.defaultUserSchema.add('levels', (schema) => {
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

new MyKlasaClient(config).login(token);
