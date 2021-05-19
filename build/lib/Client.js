"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const discord_akairo_1 = require("discord-akairo");
const path_1 = require("path");
class Client extends discord_akairo_1.AkairoClient {
    constructor() {
        super({
            disableMentions: 'everyone',
        });
        this.setup();
        this.on('ready', () => {
            console.log(`Logged in as ${this.user.tag}. Ready to serve ${this.guilds.cache.size} guilds.`);
        });
    }
    async setup() {
        this.commandHandler = new discord_akairo_1.CommandHandler(this, {
            prefix: '!',
            commandUtil: true,
            handleEdits: true,
            allowMention: true,
            directory: this.getDirectory('commands'),
        });
        this.inhibitorHandler = new discord_akairo_1.InhibitorHandler(this, {
            directory: this.getDirectory('inhibitors'),
        });
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: this.getDirectory('listeners'),
        });
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            inhibitorHandler: this.inhibitorHandler,
            listenerHandler: this.listenerHandler,
            process: process,
        });
        this.commandHandler
            .useInhibitorHandler(this.inhibitorHandler)
            .useListenerHandler(this.listenerHandler);
        await this.listenerHandler.loadAll();
        await this.inhibitorHandler.loadAll();
        await this.commandHandler.loadAll();
    }
    async start(token) {
        await this.login(token);
    }
    getDirectory(extension) {
        return path_1.join(process.cwd(), 'src', extension);
    }
}
exports.Client = Client;
exports.default = Client;
