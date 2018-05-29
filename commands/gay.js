const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** is gay. :gay_pride_flag:`, new MessageAttachment(
        await client.idiotic.rainbow(user.displayAvatarURL({ format: "png", size: 128 })), "gay.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "gay",
    category: "Idiotic",
    description: "Make someone gay. Lol xd.",
    usage: "gay <user>"
};