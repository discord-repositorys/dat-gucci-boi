const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {
    const user = message.mentions.users.first();
    if (!user) {
        message.channel.send("Please tag a user to mute them.");
        return;
    }
    if (!message.member.permissions.has("BAN_MEMBERS")) {
        message.reply("you can't do this! You are missing the **Ban Members** permission.");
        return;
    }
    message.channel.overwritePermissions(user, {
        SEND_MESSAGES: false
    })
    .then(() => message.channel.send(`**${user.tag}** has been forcefully shutted-up. :zipper_mouth:`))
    .catch(e => {
            if (e.status === 403) {
                message.channel.send("I don't have the Manage Permissions permission, so no can do!");
            } else {
                message.channel.send(`Unexpected error! Details:\n${e}`);
            }
        });
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "mute",
    category: "Mod",
    description: "Prevents someone from sending messages for this channel. Requires Ban Members permission.",
    usage: "mute [user]"
};