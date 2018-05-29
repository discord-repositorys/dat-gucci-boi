const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** with the coffee.`, new MessageAttachment(
        await client.idiotic.coffee(user.username, "gay"), "thumbsup.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "coffee",
    category: "Idiotic",
    description: "Coffee. Yes.",
    usage: "coffee <user>"
};