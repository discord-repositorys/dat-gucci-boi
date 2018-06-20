module.exports = async client => {
  const presences = [
    "Ready for ACTION!",
    "Am I the gucci boi you want?",
    "My pfp's only the beginning of what I've got.",
    "Gucci boi. Gucci gang.",
    "Uwot?!",
    "REEEEEEEE",
    "I'm made of JS. No wonder why I suck...",
    "Try me. Hopefully, keep me too."
  ];
  await client.wait(1000);
  client.logger.log(`[READY] ${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "ready");
  setInterval(() => client.user.setActivity(presences.random()), 15000);
  client.guilds.filter(g => !client.settings.has(g.id)).forEach(g => client.settings.set(g.id, client.config.defaultSettings));
};
