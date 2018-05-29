module.exports = (client, member) => {
  const settings = client.settings.get(member.guild.id);

  if (settings.welcomeEnabled !== "true") return;

  const welcomeMessage = settings.welcomeMessage.replace("{{user}}", member.user.tag);

  if (settings.welcomeChannel) {
    const chan = member.guild.channels.find("name", settings.welcomeChannel);
    if (chan) chan.send(welcomeMessage).catch(console.error); // README
  }
};