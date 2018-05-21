exports.run = async (client, message, args, level) => {
    const { MessageEmbed } = require("discord.js");
    const moment = require("moment");
    require("moment-duration-format");
    const user = message.mentions.users.first() || await client.fetchUser(args[0]) || message.author;
    const created_time = moment.duration(Date.now() - message.author.createdTimestamp).format("Y [years], M [months], D [days], H [hrs], m [mins], s [secs]");
    const embed = new MessageEmbed()
        .setTitle("User Info")
        .setColor(0x00ff00)
        .setAuthor(`${user.tag}`, user.displayAvatarURL({ format: "png", size: 128 }))
        .addField("ID", user.id)
        .addField("Registration Date", created_time)
        .addField("Currently Playing", user.presence.game)
        .addField("Status", user.presence.status)
        user.bot ? embed.addField("Bot", "Yes") : embed.addField("Bot", "No");
        user.verified ? embed.addField("Verified User", "Yes") : embed.addField("Verified User", "No");
        
        
        
    message.channel.send(embed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ui"],
    permLevel: "User"
};

exports.help = {
    name: "userinfo",
    category: "Utility",
    description: "Get user info!",
    usage: ".userinfo <user>"
};
