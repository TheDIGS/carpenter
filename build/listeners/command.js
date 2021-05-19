"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class default_1 extends discord_akairo_1.Listener {
    constructor() {
        super('command', {
            emitter: 'commandHandler',
            event: 'commandStarted',
        });
    }
    exec() {
        console.log(`Command Started!`);
    }
}
exports.default = default_1;
