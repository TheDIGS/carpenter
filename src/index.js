const Akairo = require('discord-akairo');

class Client extends Akairo.AkairoClient {
    constructor() {
        super({});

        this.setup();

        this.on('ready', () => console.log(`Logged in as ${this.user.tag}!`));
    }

    setup() {
        this.commandHandler = new Akairo.CommandHandler(this, {
            directory: 'src/commands',
            prefix: '!',
            commandUtil: true,
            handleEdits: true,
        });

        this.inhibitorHandler = new Akairo.InhibitorHandler(this, {
            directory: 'src/inhibitors',
        });

        this.listenerHandler = new Akairo.ListenerHandler(this, {
            directory: 'src/listeners',
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
    }
}

const client = new Client();

client.start();
