const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** gave a thumbs up. :thumbsup:`, new MessageAttachment(
        await client.idiotic.vaultBoy(user.displayAvatarURL({ format: "png", size: 128 })), "thumbsup.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "thumbsup",
    category: "Idiotic",
    description: "Give a gucci thumbs up.",
    usage: "thumbsup <user>"
};