const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first();
    if (!user) {
        message.channel.send("Please tag a user to SLAP THEM!");
        return;
    }
    await message.channel.send(`Ouch! **${message.author.username}** punched **${user.username}** SUPER HARD!`, new MessageAttachment(
        await client.idiotic.superPunch(message.author.displayAvatarURL({ format: "png", size: 128 }), user.displayAvatarURL({ format: "png", size: 128 })), "scary.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "superpunch",
    category: "Idiotic",
    description: "Punch someone. With mighty strength.",
    usage: "superpunch [user]"
};