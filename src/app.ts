import Client from './lib/Client';

// get token from environment
let token: string;
try {
    token = process.env.DISCORD_TOKEN;
} catch (err) {}

const client = new Client();

client.start(token);

console.log(client.commandHandler.modules, client.commandHandler.directory);
