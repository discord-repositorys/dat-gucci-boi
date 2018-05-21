const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    await message.channel.send(new MessageAttachment(
        await client.idiotic.achievement(message.author.displayAvatarURL({ format: "png", size: 128 }), args.join(" ")), "achievement.png"));
};
exports.conf = {
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "achievement",
    category: "Idiotic",
    description: "Achievement in Minecraft! :D",
    usage: "achievement [text]"
};