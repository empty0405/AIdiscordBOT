# AI Discord Bot

An AI-powered Discord bot built with Node.js and Discord.js.

## Features

- Basic command handling
- Ping/Pong command for testing connectivity
- Help command to list available commands
- Easy to extend with AI capabilities

## Setup

### Prerequisites

- Node.js (v16 or higher)
- A Discord Bot Token (from [Discord Developer Portal](https://discord.com/developers/applications))

### Installation

1. Clone this repository:
```bash
git clone https://github.com/empty0405/AIdiscordBOT.git
cd AIdiscordBOT
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file from the example:
```bash
cp .env.example .env
```

4. Edit `.env` and add your Discord bot token:
```
DISCORD_TOKEN=your_discord_bot_token_here
CLIENT_ID=your_client_id_here
```

### Running the Bot

Start the bot with:
```bash
npm start
```

## Commands

- `!ping` - Check if the bot is responsive
- `!help` - Show available commands
- `!about` - Information about the bot

## Configuration

The bot uses environment variables for configuration. See `.env.example` for available options.

## Development

To add new commands, modify the `bot.js` file and add new message handlers in the `MessageCreate` event.

## License

ISC
