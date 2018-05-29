const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** is now approved.`, new MessageAttachment(
        await client.idiotic.approved(user.displayAvatarURL({ format: "png", size: 128 })), "approved.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "approved",
    category: "Idiotic",
    description: "Approved. Yup.",
    usage: "approved <user>"
};