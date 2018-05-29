const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    const user = message.mentions.users.first() || message.author;
    await message.channel.send(`**${user.username}** is in greyscale. This is 2018, people...`, new MessageAttachment(
        await client.idiotic.greyscale(user.displayAvatarURL({ format: "png", size: 128 })), "greyscale.png"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: ["wf"],
        permLevel: "User"
    };

exports.help = {
    name: "greyscale",
    category: "Idiotic",
    description: "Turn your pic into greyscale!",
    usage: "greyscale <user>"
};