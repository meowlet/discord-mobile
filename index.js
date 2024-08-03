const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    // GatewayIntentBits.GuildPresences
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  // Set mobile status
  client.user.setPresence({
    activities: [
      {
        type: ActivityType.Custom,
        name: "customstatus",
        state: "⚔️ KILL ALL NIGGERS",
      },
    ],
    status: "online",
  });
});

const token = process.env.DISCORD_TOKEN;
if (!token) {
  console.error("Error: DISCORD_TOKEN environment variable not found!");
  process.exit(1);
}

client.login(token);
