const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** is a weeb?`, new MessageAttachment(
        await client.idiotic.karen(user.displayAvatarURL({ format: "png", size: 128 })), "thumbsup.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "weeb",
    category: "Idiotic",
    description: "Become a weeb. A w33b.",
    usage: "weeb <user>"
};