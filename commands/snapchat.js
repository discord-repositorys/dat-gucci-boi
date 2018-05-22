const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    await message.channel.send(`**${message.author.username}** sent a Snapchat.`, new MessageAttachment(
        await client.idiotic.snapchat(args.join(" ")), "snapchat.png"));
    message.channel.stopTyping()
};
exports.conf = {
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "snapchat",
    category: "Idiotic",
    description: "A Snap with the best picture ever.",
    usage: "snapchat [text]"
};