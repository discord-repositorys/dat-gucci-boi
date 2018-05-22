const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`OOF! **${user.username}** is on a tattoo!`, new MessageAttachment(
        await client.idiotic.wanted(user.displayAvatarURL({ format: "png", size: 128 })), "wanted.png"))
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "wanted",
    category: "Idiotic",
    description: "Someone's wanted!",
    usage: "wanted <user>"
};