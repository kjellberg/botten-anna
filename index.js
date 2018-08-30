const Discord = require('discord.js');
const Sequelize = require('sequelize');
const client = new Discord.Client();

// Load environment variables from .env
if (process.env.NODE_ENV !== 'production') { 
  require('dotenv').load(); 
}

const commands = require('./src/commands');
const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => BOT.start())
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const BOT = {
  start: function() {
    client.on('ready', this.onReady);
    client.on('message', this.onMessage);

    client.login(process.env.DISCORD_BOT_TOKEN);
  },

  onReady: function() {
    console.log(`Logged in as ${client.user.tag}!`);
  },

  onMessage: function(msg) {
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

  }
}
