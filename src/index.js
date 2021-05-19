const Akairo = require('discord-akairo');
const { join } = require('path');

class Client extends Akairo.AkairoClient {
    constructor() {
        super({ disableMentions: 'everyone', ownerID: '' });

        this.setup();

        this.on('ready', () => console.log(`Logged in as ${this.user.tag}!`));
    }

    setup() {
        this.commandHandler = new Akairo.CommandHandler(this, {
            directory: join(__dirname, 'commands/'),
            prefix: '!',
            commandUtil: true,
            handleEdits: true,
            allowMention: true,
        });

        this.inhibitorHandler = new Akairo.InhibitorHandler(this, {
            directory: join(__dirname, 'listeners/'),
        });

        this.listenerHandler = new Akairo.ListenerHandler(this, {
            directory: join(__dirname, 'listeners/'),
        });

        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            inhibitorHandler: this.inhibitorHandler,
            listenerHandler: this.listenerHandler,
            process: process,
        });

        this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
        this.commandHandler.useListenerHandler(this.listenerHandler);
    }

    start() {
        this.listenerHandler.loadAll();
        this.inhibitorHandler.loadAll();
        this.commandHandler.loadAll();

        this.login(process.env.DISCORD_TOKEN);

        console.log(this);
    }
}

const client = new Client();

client.start();
