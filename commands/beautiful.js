const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** is beautiful!`, new MessageAttachment(
        await client.idiotic.beautiful(message.author.displayAvatarURL({ format: "png", size: 128 })), "beautiful.png"));
    message.channel.stopTyping();
    };
exports.conf = {
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "beautiful",
    category: "Idiotic",
    description: "Become BEAUTIFUL!",
    usage: "beautiful"
};