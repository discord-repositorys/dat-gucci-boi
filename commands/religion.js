const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** is a weeb?`, new MessageAttachment(
        await client.idiotic.religion(user.displayAvatarURL({ format: "png", size: 128 })), "thumbsup.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "religion",
    category: "Idiotic",
    description: "As the name says.",
    usage: "religion <user>"
};