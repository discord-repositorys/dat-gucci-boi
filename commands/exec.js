const exec = require('child_process').exec;

exports.run = async(client, message, args, level) => {
    exec(`${args.join(' ')}`, (error, stdout) => {
      const response = (error || stdout);
      message.channel.send(`Ran: ${message.content}\n\`\`\`${response}\`\`\``, {split: true}).catch(console.error);
    });
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "exec",
  category: "System",
  description: "Executes command prompt code",
  usage: "exec [...code]"
};
