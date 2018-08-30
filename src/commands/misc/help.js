module.exports = function(msg) {
  let commands = require('../index.js');
  let output = "";

  for (var command in commands) {
    output += `!${command} - ${commands[command].desc}` + "\n";
  }


  msg.reply("Available commands: \n" + output);
}