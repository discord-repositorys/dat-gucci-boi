const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** is now inverted.`, new MessageAttachment(
        await client.idiotic.invert(user.displayAvatarURL({ format: "png", size: 128 })), "invert.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "invert",
    category: "Idiotic",
    description: "Turn your pic into invert!",
    usage: "invert <user>"
};