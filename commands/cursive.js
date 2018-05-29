const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    if (!args) {
        message.channel.send("Bruh. You want cursive text? Enter the text.");
        return;
    }
    message.channel.startTyping(1);
    await message.channel.send(await client.idiotic.cursive(args.join(" "), "bold"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "cursive",
    category: "Idiotic (Text)",
    description: "Turn your text into cursive. Fancy.",
    usage: "cursive [text]"
};