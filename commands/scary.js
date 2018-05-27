const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** scared a little kid!`, new MessageAttachment(
        await client.idiotic.wreckIt(user.displayAvatarURL({ format: "png", size: 128 })), "scary.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "scary",
    category: "Idiotic",
    description: "Scare off a poor kid. Coz you just that ugly.",
    usage: "scary <user>"
};