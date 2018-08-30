module.exports = function(msg) {
  let user = msg.author;
  msg.reply(`PONG FÖR FAN ${user.username}!`);
}