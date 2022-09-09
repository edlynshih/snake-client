const net = require("net");
const { IP, PORT } = require("./constants");
const { name } = require("./play");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: " + name);
  })

  conn.on("data", (message) => {
    console.log(message)
  });

  return conn;
};

module.exports = { connect };
