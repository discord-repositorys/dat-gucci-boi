const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** got insulted. By their waifu.`, new MessageAttachment(
        await client.idiotic.garbage(user.displayAvatarURL({ format: "png", size: 128 })), "garbage.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: ["wf"],
        permLevel: "User"
    };

exports.help = {
    name: "garbage",
    category: "Idiotic",
    description: "Well then...Someone is garbage.",
    usage: "garbage <user>"
};