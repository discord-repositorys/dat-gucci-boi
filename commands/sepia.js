const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** is in sepia.`, new MessageAttachment(
        await client.idiotic.sepia(user.displayAvatarURL({ format: "png", size: 128 })), "sepia.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "sepia",
    category: "Idiotic",
    description: "Add that sepia filter. Mhm.",
    usage: "sepia <user>"
};