const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** is beautiful!`, new MessageAttachment(
        await client.idiotic.beautiful(message.author.displayAvatarURL({ format: "png", size: 128 })), "beautiful.png"));
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