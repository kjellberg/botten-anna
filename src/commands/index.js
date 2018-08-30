module.exports = {

  help: {
    desc: 'Shows all available options and commands.',
    src: require('./misc/help')
  },

  ping: {
    desc: 'I\'ll answer PONG! if I am here.',
    src: require('./misc/ping')
  },

  thetime: {
    desc: 'Get the current time.',
    src: require('./misc/thetime')
  },

  duckpick: {
    desc: 'I\'ll show you a dickpic',
    src: require('./misc/duckpick')
  },
}