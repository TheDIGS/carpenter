const { Task } = require('klasa');

module.exports = class extends Task {

    constructor(...args) {
        /**
         * Any default options can be omitted completely.
         * if all options are default, you can omit the constructor completely
         */
        super(...args, { enabled: true });
    }

    async run(message, reminder) {
        const _guild = this.client.guilds.get(message.guild);
        const _author = await _guild.members.fetch(message.author).catch(() => null);
        const dm = await _author.createDM();

        dm.send(reminder)
    }

};
