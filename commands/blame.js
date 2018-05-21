const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    await message.channel.send(new MessageAttachment(
        await client.idiotic.blame(args.join(" ")), "blame.png"));
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