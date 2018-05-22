const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** is on a painting.`, new MessageAttachment(
        await client.idiotic.painting(user.displayAvatarURL({ format: "png", size: 128 })), "painting.png"))
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "painting",
    category: "Idiotic",
    description: "Right on dat painting.",
    usage: "painting <user>"
};