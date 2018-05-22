const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** has to facepalm. RIP.`, new MessageAttachment(
        await client.idiotic.facepalm(user.displayAvatarURL({ format: "png", size: 128 })), "achievement.png"));
    message.channel.stopTyping()
    };
exports.conf = {
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "facepalm",
    category: "Idiotic",
    description: "Exactly what the name suggests.",
    usage: "facepalm <user>"
};