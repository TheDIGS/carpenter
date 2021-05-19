import { Command } from 'discord-akairo';
import Message from '../lib/Message';

export default class extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping'],
        });
    }

    async exec(message: Message) {
        return message.channel.send(`Running at ${message.client.ws.ping} ms.`);
    }
}
