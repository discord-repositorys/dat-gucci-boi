const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    await message.channel.send(new MessageAttachment(
        await client.idiotic.pls(args.join(" ")), "pls.png"));
};
exports.conf = {
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "pls",
    category: "Idiotic",
    description: "Plssssss...",
    usage: "pls [text]"
};