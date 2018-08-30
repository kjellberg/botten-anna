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

  // Check if first character is a exclamation mark!
  if (command.charAt(0) !== "!") {
    // Return here cause we do not want to 
    // waste any time on messages that are not commands.
    return;
  }

  // Do not process things that are sent from ourself.
  if (msg.author.id == client.user.id) return;

  // Remove first character (!) from message.
  command = command.substring(1);

  // Check if incoming message has a command.
  if (typeof commands[command] !== "undefined") { 
    // Run the command
    commands[command].src(msg);
  }

});

client.login(process.env.DISCORD_BOT_TOKEN);