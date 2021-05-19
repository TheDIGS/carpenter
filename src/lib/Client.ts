import {
    AkairoClient,
    CommandHandler,
    InhibitorHandler,
    ListenerHandler,
} from 'discord-akairo';
import { join } from 'path';
import { pathToFileURL } from 'url';

class Client extends AkairoClient {
    constructor() {
        super({
            disableMentions: 'everyone',
        });

        this.setup();

        this.on('ready', () => {
            console.log(
                `Logged in as ${this.user.tag}. Ready to serve ${this.guilds.cache.size} guilds.`
            );
        });
    }

    public commandHandler: CommandHandler;

    public inhibitorHandler: InhibitorHandler;

    public listenerHandler: ListenerHandler;

    async setup() {
        this.commandHandler = new CommandHandler(this, {
            prefix: '!',
            commandUtil: true,
            handleEdits: true,
            allowMention: true,
            
            directory: this.getDirectory('commands'),
        });

        this.inhibitorHandler = new InhibitorHandler(this, {
            directory: this.getDirectory('inhibitors'),
        });

        this.listenerHandler = new ListenerHandler(this, {
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

    async start(token: string) {
        await this.login(token);
    }

    getDirectory(extension: string) {
        return join(process.cwd(), 'src', extension);
    }
}

export default Client;
export { Client };
