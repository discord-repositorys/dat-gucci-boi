const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** is scary as HELL!`, new MessageAttachment(
        await client.idiotic.fear(user.displayAvatarURL({ format: "png", size: 128 })), "fear.png"))
    message.channel.stopTyping();
    },
    exports.conf = {
        aliases: ["wf"],
        permLevel: "User"
    };

exports.help = {
    name: "fear",
    category: "Idiotic",
    description: "Are you scary? I think so.",
    usage: "fear <user>"
};