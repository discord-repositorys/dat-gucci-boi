const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** is being respected!`, new MessageAttachment(
        await client.idiotic.respect(user.displayAvatarURL({ format: "png", size: 128 })), "achievement.png"));
    message.channel.stopTyping();
    };
exports.conf = {
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "respect",
    category: "Idiotic",
    description: "Give someone your respect.",
    usage: "respect <user>"
};