const { MOVEMENTS, SAYINGS } = require("./constants");

let connection;

// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    } 
    
    if (MOVEMENTS[key]) {
      connection.write(MOVEMENTS[key]);
    }

    if (SAYINGS[key]) {
      connection.write("Say: " + SAYINGS[key]);
    }
};

module.exports = { setupInput };
