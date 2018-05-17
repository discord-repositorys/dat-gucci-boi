const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    let user = user || args[0];
    const embed = new MessageEmbed()
        .setTitle(`${user.name}'s avatar`)
        .setImage(user.defaultAvatarURL);
    message.channel.send(embed);
};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["av"],
    permLevel: "User"
};

exports.help = {
    name: "avatar",
    category: "Utility",
    description: "Gets a user's avatar picture!",
    usage: "avatar <user>"
};
