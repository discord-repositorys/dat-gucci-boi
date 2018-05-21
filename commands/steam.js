const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(new MessageAttachment(
        await client.idiotic.steam(`**${user.username}** is on a Steam card.`, user.displayAvatarURL({ format: "png", size: 128 }), user.username), "achievement.png"));
};
exports.conf = {
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "steam",
    category: "Idiotic",
    description: "Right on a Steam card!",
    usage: "steam <user>"
};