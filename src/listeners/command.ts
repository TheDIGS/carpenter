import { Listener } from 'discord-akairo';

export default class extends Listener {
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
