const irc = require("irc");
const keyHandler = require("./keyHandler.js");
const config = require("./config.js");

// https://github.com/martynsmith/node-irc
const ircClient = new irc.Client(config.server, config.botName, {
	channels: config.channels,
  autoRejoin: true,
  retryCount: 999,
  retryDelay: 10000
});

const commandRegex =
  config.regexCommands ||
  new RegExp("^(" + config.commands.join("|") + ")$", "i");

ircClient.addListener("message", function(from, to, text, message) {
  // return if message has been sent by the bot himself
  if (message.nick === config.botName) {
    return;
  }

  let messageMatches = text.match(commandRegex);

  if (messageMatches) {
    // print username and message to console
    console.log(`@${message.nick}: ${text}`);

    // send the message to the emulator
    keyHandler.sendKey(text.toLowerCase());
  }
});

