const discord = require("discord.js");

module.exports = (client, guild) => {
  client.settings.delete(guild.id);
  module.exports = (client, guild) => {
    client.settings.set(guild.id, client.config.defaultSettings);
    let chan = client.channels.get("392443319684300801");
    const embed = new discord.MessageEmbed()
      .setTitle("dat banana bot left a server.")
      .setDescription(`**${guild.name}**`)
      .setColor(0xf45342);
    chan.send(embed);
  };
};
