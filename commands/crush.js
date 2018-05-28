const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first();
    if (!user) {
        message.channel.send("Please tag a user to SLAP THEM!");
        return;
    }
    await message.channel.send(`owo! **${message.author.username}** has a crush on **${user.username}**! :revolving_hearts:`, new MessageAttachment(
        await client.idiotic.crush(user.displayAvatarURL({ format: "png", size: 128 }), message.author.displayAvatarURL({ format: "png", size: 128 })), "crush.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "crush",
    category: "Idiotic",
    description: "owo! Who's your crush...",
    usage: "crush [user]"
};