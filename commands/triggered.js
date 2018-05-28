const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** is triggered. Very triggered.`, new MessageAttachment(
        await client.idiotic.triggered(user.displayAvatarURL({ format: "png", size: 128 })), "triggered.gif"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "triggered",
    category: "Idiotic",
    description: "GRRR...GET TRIGGERED!",
    usage: "triggered <user>"
};