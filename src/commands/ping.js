const { Command } = require('discord-akairo');

module.exports = class extends Command {
    constructor() {
        super('ping', {});
    }

    exec(message) {
        console.log('Hello!');

        return message.util.send(
            `Pong! Carpenter is running at ${this.client.ws.ping} ms.`
        );
    }
};
