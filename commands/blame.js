const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    await message.channel.send(new MessageAttachment(
        await client.idiotic.blame(args.join(" ")), "blame.png"));
    message.channel.stopTyping();
};
exports.conf = {
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "blame",
    category: "Idiotic",
    description: "Blame someone!",
    usage: "blame [text]"
};