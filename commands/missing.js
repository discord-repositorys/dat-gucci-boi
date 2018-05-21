const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** went missing. OOF!`, new MessageAttachment(
        await client.idiotic.missing(user.displayAvatarURL({ format: "png", size: 128 }), user.username), "achievement.png"));
};
exports.conf = {
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "missing",
    category: "Idiotic",
    description: "Oof, someone is missing.",
    usage: "missing <user>"
};