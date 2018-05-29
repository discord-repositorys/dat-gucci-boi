const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    if (!args) {
        message.channel.send("Bruh. You want tiny text? Enter the text.");
        return;
    }
    message.channel.startTyping(1);
    await message.channel.send(await client.idiotic.tiny(args.join(" "), "superscript"));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "tiny",
    category: "Idiotic (Text)",
    description: "ᶦᵗ'ˢ ᵗᶦⁿʸ ᵃᶠ",
    usage: "tiny [text]"
};