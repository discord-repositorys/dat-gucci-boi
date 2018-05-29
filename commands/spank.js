const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first();
    if (!user) {
        message.channel.send("Please tag a user to SLAP THEM!");
        return;
    }
    await message.channel.send(`Ouch! **${message.author.username}** spanked **${user.username}** hard ~~on the ass~~!`, new MessageAttachment(
        await client.idiotic.superSpank(message.author.displayAvatarURL({ format: "png", size: 128 }), user.displayAvatarURL({ format: "png", size: 128 })), "spank.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "spank",
    category: "Idiotic",
    description: "Spank someone. For dat ass.",
    usage: "spank [user]"
};