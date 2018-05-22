const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** is on a Steam card.`, new MessageAttachment(
        await client.idiotic.steam(user.displayAvatarURL({ format: "png", size: 128 }), user.username), "achievement.png"));
    message.channel.stopTyping();        
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