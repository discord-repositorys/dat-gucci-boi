const {MessageEmbed} = require("discord-js");
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const embed = new MessageEmbed()
    .setColor(15400990)
    .setDescription(`:ping_pong: Pong! Time - **${Date.now() - message.createdTimestamp}ms** \nAPI Latency is **${Math.round(client.ping)}ms**`);
  message.channel.send(embed);
};
  


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pong"],
  permLevel: "User"
};

exports.help = {
  name: "ping",
  category: "Utility",
  description: "It... like... pings. Then Pongs. And it's not Ping Pong.",
  usage: "ping"
};
