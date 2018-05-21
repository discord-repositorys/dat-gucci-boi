const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    const user = message.mentions.users.first() || await client.fetchUser(args[0]) || message.author;
    await message.channel.send(new MessageAttachment(
        await client.idiotic.steam(user.displayAvatarURL({ format: "png", size: 128 }), user.username), "achievement.png"));
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