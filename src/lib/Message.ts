import { Message } from 'discord.js';
import Client from './Client';

class MyMessage extends Message {
    client: Client;
}

export default MyMessage;
export { MyMessage as Message };
