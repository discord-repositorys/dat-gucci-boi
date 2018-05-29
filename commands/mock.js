const { MessageAttachment } = require("discord.js");
exports.run = async (client, message, args, level) => {
    if (!args) {
        message.channel.send("Bruh. You want mocking text? Enter the text.");
        return;
    }
    message.channel.startTyping(1);
    await message.channel.send(await client.idiotic.mock(args.join(" ")));
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "mock",
    category: "Idiotic (Text)",
    description: "ThIs Is wHaT yOuR tExT wOuLd lOoK lIkE",
    usage: "mock [text]"
};