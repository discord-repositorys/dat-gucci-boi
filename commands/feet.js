const { MessageEmbed } = require("discord.js");
const superagent = require("superagent");


exports.run = async (client, message, args, level) => {
    message.channel.startTyping(1);
    if (!message.channel.nsfw) {
        message.channel.send("If I didn't stop you, everyone else seeing this **non-NSFW** channel would have eye cancer.");
        return;
    }
    superagent.get("https://nekos.life/api/v2/img/feetg")
        .then((resp) => {
            const image = resp.body.url;
            const embed = new MessageEmbed()
                .setTitle("Here, have some gucci feet.")
                .setImage(image)
                .setFooter(message.author.username, message.author.displayAvatarURL({ format: "png", size: 128 }));
            message.channel.send({ embed });
        })
        .catch((e) => {
            message.channel.send(`An unexpected error occured. You shouldn't get this error:\n${e}`);
        });
    message.channel.stopTyping();
},
    exports.conf = {
        aliases: [],
        permLevel: "User"
    };

exports.help = {
    name: "feet",
    category: "NSFW",
    description: "Get a random hentai picture of feet.",
    usage: "feet"
};
