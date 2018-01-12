const config = require("../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run(message) {
        const logs = config.logs.deleted;

        const embed = new MessageEmbed()
            .setColor(0xFF0000)
            .setAuthor(message.author.displayName)
            .setTitle(`Deleted message in ${message.channel}.`)
            .setDescription(message.content)
            .setImage(message.attachments.size > 0 ? message.attachments.first().url : null);

        logs.send(embed);
    }
};