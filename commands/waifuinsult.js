const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** got insulted. By their waifu.`, new MessageAttachment(
        await client.idiotic.waifuInsult(user.displayAvatarURL({ format: "png", size: 128 })), "waifuinsult.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: ["wf"],
        permLevel: "User"
    };

exports.help = {
    name: "waifuinsult",
    category: "Idiotic",
    description: "Git rekt by yo waifu. What?",
    usage: "waifuinsult <user>"
};