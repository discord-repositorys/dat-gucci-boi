const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** is a CHALLENGER!`, new MessageAttachment(
        await client.idiotic.challenger(user.displayAvatarURL({ format: "png", size: 128 })), "challenger.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "challenger",
    category: "Idiotic",
    description: "Become a challenger.",
    usage: "challenger <user>"
};