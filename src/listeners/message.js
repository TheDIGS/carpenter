const { Listener } = require('discord-akairo');

module.exports = class extends Listener {
    constructor() {
        super('message', {
            emitter: 'client',
            event: 'message',
        });
    }

    exec() {
        console.log('message read!')
    }
};
