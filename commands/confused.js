const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.author;
    await message.channel.send(`**${user.username}** is confused?`, new MessageAttachment(
        await client.idiotic.confused(user.displayAvatarURL({ format: "png", size: 128 }), client.users.fetch("277981712989028353").displayAvatarURL({ format: "png", size: 128 })), "confused.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "confused",
    category: "Idiotic",
    description: "Got confused? Uh-huh...",
    usage: "confused"
};