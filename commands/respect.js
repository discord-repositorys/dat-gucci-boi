const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** is being respected!`, new MessageAttachment(
        await client.idiotic.respect(user.displayAvatarURL({ format: "png", size: 128 })), "achievement.png"));
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