const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {
    const user = message.mentions.members.first();
    if (!user) {
        message.channel.send("Please tag a user to ban.");
        return;
    }
    if (!message.member.permissions.has("BAN_MEMBERS")) {
        message.reply("you can't do this! You are missing the **Ban Members** permission.");
        return;
    }
    const banned_user = await user.ban()
        .catch(e => {
            if (e.status === 403) {
                message.channel.send("I don't have the Kick Members permission, so no can do!");
            } else {
                message.channel.send(`Unexpected error! Details:\n${e}`);
            }
        });
    message.channel.send(`**${banned_user.user.tag}** has been successfully banned from this server. See you...never!`);
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "ban",
    category: "Mod",
    description: "Bans someone with the ban hammer. Requires Ban Members permission.",
    usage: "ban [user]"
};