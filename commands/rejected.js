const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`OOF...**${user.username}** is now rejected.`, new MessageAttachment(
        await client.idiotic.rejected(user.displayAvatarURL({ format: "png", size: 128 })), "rejected.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "rejected",
    category: "Idiotic",
    description: "Got rejected. OOF!",
    usage: "rejected <user>"
};