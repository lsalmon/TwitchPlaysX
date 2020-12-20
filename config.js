// IRC connection params
let channels = ["#testing"];
let server = "irc.freenode.net";
let botName = "IrcBot_McPokemon";
let programName = process.env.CONFIG_PROGRAM_NAME || "VisualBoyAdvance";

// Input params
let timeToWait = 5000;
let delay = 100;

// List of commands to check for
let commands = [
  "left",
  "right",
  "up",
  "down",
  "start",
  "select",
  "a",
  "b",
  "democracy",
  "anarchy",
];

let filteredCommands = [];
let throttledCommands = [];

module.exports = {
  // all commands to print out
  commands,
  // IRC channels to connect to
  channels,
  // IRC server to connect to
  server,
  // IRC bot name
  botName,
  // Title of the window of the program (ex: 'Desmume' or 'VBA')
  programName,

  // If you need to filter the commands sent to the program
  // Ex: democracy/anarchy since they don't affect the program itself
  // Ex: ["democracy","anarchy"]
  filteredCommands,

  // If you want to prevent people from using from command too often
  // Ex: ["start"]
  throttledCommands,

  // Throttle time in seconds
  // Ex: you can limit 'start' so it's only used every 5 sec
  timeToWait,

  // Delay between each possible keypress in milliseconds (can't be too fast)
  // To change on Windows, change `key.py`
  delay,
};
