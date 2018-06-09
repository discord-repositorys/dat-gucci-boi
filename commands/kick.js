const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {
    const user = message.mentions.members.first();
    if (!user) {
        message.channel.send("Please tag a user to kick.");
        return;
    }
    if (!message.member.permissions.has("KICK_MEMBERS")) {
        message.reply("you can't do this! You are missing the **Kick Members** permission.");
        return;
    }
    const kicked_user = await user.kick()
        .catch(e => {
            if (e.status === 403) {
                message.channel.send("I don't have the Kick Members permission, so no can do!");
            } else {
                message.channel.send(`Unexpected error! Details:\n${e}`);
            }
        });
    message.channel.send(`**${kicked_user.user.tag}** has been successfully kicked out of this server.`);  
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "kick",
    category: "Mod",
    description: "Kicks someone out of the server. Requires Kick Members permission.",
    usage: "kick [user]"
};