const { Listener } = require('discord-akairo');

module.exports = class extends Listener {
    constructor() {
        super('command', {
            emitter: 'commandHandler',
            event: 'commandStarted',
        });
    }

    exec() {
        console.log('Command Started!');
    }
};
