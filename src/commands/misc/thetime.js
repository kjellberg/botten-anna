module.exports = function(msg) {
  now = new Date();
  the_time = now.getHours() + ':' + now.getMinutes();
  msg.reply("The time is now " + the_time);
}