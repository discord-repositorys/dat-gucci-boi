const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`OOF! **${user.username}** got stepped on!`, new MessageAttachment(
        await client.idiotic.stepped(user.displayAvatarURL({ format: "png", size: 128 })), "stepped.png"));
    message.channel.stopTyping();
    },
exports.conf = {
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "stepped",
    category: "Idiotic",
    description: "Step on someone. Or yourself. Dunno how that works...",
    usage: "stepped <user>"
};