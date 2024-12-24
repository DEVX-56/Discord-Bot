const { REST, Routes } = require("discord.js");

//Creating custom command for ouer server
const commands = [
  {
    name: "ping",
    description: "Replies with pong!",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "/******** Discord bot token***********/"
); //Rest client

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1320692312208183326"), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
