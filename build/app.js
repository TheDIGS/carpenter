"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./lib/Client");
// get token from environment
let token;
try {
    token = process.env.DISCORD_TOKEN;
}
catch (err) { }
const client = new Client_1.default();
client.start(token);
console.log(client.commandHandler.modules, client.commandHandler.directory);
