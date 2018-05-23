const discord = require("discord.js");

module.exports = (client, guild) => {
  client.settings.set(guild.id, client.config.defaultSettings);
  let chan = client.channels.get("392443319684300801");
  const embed = new discord.MessageEmbed()
    .setTitle("dat banana bot joined a server!")
    .setDescription(`**${guild.name}**`)
    .setColor(0x00ff00)
    .setThumbnail(guild.iconURL)
    .addField("Member Count", guild.memberCount)
    .addField("Owner", guild.owner.user.tag);
  chan.send(embed);
};
