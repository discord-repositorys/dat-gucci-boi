const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const user = message.mentions.users.first() || await client.fetchUser(args[0]) || message.author;
    const embed = new MessageEmbed()
        .setTitle(`${user.username}'s avatar`)
        .setImage(user.displayAvatarURL({ format: "png", size: 128 }));
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

