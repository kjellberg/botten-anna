const Discord = require('discord.js');
const client = new Discord.Client();

const commands = require('./src/commands');

// Load environment variables from .env
if (process.env.NODE_ENV !== 'production') { 
  require('dotenv').load(); 
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  let command = msg.content;

  // CHeck if incoming message has a command.
  if (typeof commands[command] !== "undefined") { 
    // Run the command
    commands[command](msg);
  }

});

client.login(process.env.DISCORD_BOT_TOKEN);