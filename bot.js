const { Client, GatewayIntentBits, Events } = require('discord.js');
require('dotenv').config();

// Create a new Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// When the bot is ready
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Message handler
client.on(Events.MessageCreate, async (message) => {
  // Ignore messages from bots
  if (message.author.bot) return;

  // Basic ping command
  if (message.content.toLowerCase() === '!ping') {
    await message.reply('Pong!');
  }

  // Help command
  if (message.content.toLowerCase() === '!help') {
    await message.reply(
      '**Available Commands:**\n' +
      '`!ping` - Check if the bot is responsive\n' +
      '`!help` - Show this help message\n' +
      '`!about` - Information about this bot'
    );
  }

  // About command
  if (message.content.toLowerCase() === '!about') {
    await message.reply('I am an AI-powered Discord bot! 🤖');
  }
});

// Error handling
client.on('error', (error) => {
  console.error('Discord client error:', error);
});

// Login to Discord
client.login(process.env.DISCORD_TOKEN).catch((error) => {
  console.error('Failed to login:', error);
  process.exit(1);
});
