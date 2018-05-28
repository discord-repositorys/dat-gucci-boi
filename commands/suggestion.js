const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.author;
    await message.channel.send(`**${user.username}** gave a suggestion.`, new MessageAttachment(
        await client.idiotic.suggesation(user.displayAvatarURL({ format: "png", size: 128 }), args.join(" ")), "achievement.png"));
    message.channel.stopTyping();
};
exports.conf = {
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "suggestion",
    category: "Idiotic",
    description: "A suggestion.",
    usage: "suggestion <user>"
};