const { MessageAttachment } = require("discord-js");
exports.run = async (client, message, args, level) => {
    await message.channel.send(new MessageAttachment(
        await client.idioticapi.batSlap(message.author.displayAvatarURL({ format: "png", size: 128 }),
            message.mentions.users.first().displayAvatarURL({ format: "png", size: 128 })),
        "blame.png"));
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