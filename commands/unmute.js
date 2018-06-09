const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {
    const user = message.mentions.users.first();
    if (!user) {
        message.channel.send("Please tag a user to unmute them.");
        return;
    }
    if (!message.member.permissions.has("BAN_MEMBERS")) {
        message.reply("you can't do this! You are missing the **Ban Members** permission.");
        return;
    }
    await message.channel.overwritePermissions(user, {
        SEND_MESSAGES: true
    })
        .catch(e => {
            if (e.status === 403) {
                message.channel.send("I don't have the Manage Permissions permission, so no can do!");
            } else {
                message.channel.send(`Unexpected error! Details:\n${e}`);
            }
        });
    message.channel.send(`**${user.tag}** has been un-shutted-up. Felt grateful for this, don't ya? :zipper_mouth:`);
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "unmute",
    category: "Mod",
    description: "Prevents someone from sending messages for this channel. Requires Ban Members permission.",
    usage: "unmute [user]"
};