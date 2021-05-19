"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class default_1 extends discord_akairo_1.Command {
    constructor() {
        super('ping', {
            aliases: ['ping'],
        });
    }
    async exec(message) {
        return message.channel.send(`Running at ${message.client.ws.ping} ms.`);
    }
}
exports.default = default_1;
