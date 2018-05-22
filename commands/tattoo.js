const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** is on a tattoo!`, new MessageAttachment(
        await client.idiotic.tattoo(user.displayAvatarURL({ format: "png", size: 128 })), "tattoo.png"));
    message.channel.stopTyping();
    },
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "tattoo",
    category: "Idiotic",
    description: "Get a tattoo. owo.",
    usage: "tattoo <user>"
};