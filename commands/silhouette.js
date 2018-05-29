const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** has a silhouette.`, new MessageAttachment(
        await client.idiotic.silhouette(user.displayAvatarURL({ format: "png", size: 128 })), "silhouette.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "silhouette",
    category: "Idiotic",
    description: "Add that silhouette filter. Mhm.",
    usage: "silhouette <user>"
};