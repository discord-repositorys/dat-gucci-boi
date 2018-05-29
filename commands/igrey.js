const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** is now inverted AND in greyscale?!`, new MessageAttachment(
        await client.idiotic.iGrey(user.displayAvatarURL({ format: "png", size: 128 })), "igrey.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "igrey",
    category: "Idiotic",
    description: "Invert AND greyscale. Two in one.",
    usage: "igrey <user>"
};