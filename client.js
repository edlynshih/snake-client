// establishes a connection with the game server
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server")
  })

  conn.on("connect", () => {
    conn.write("Name: PCS")
    //conn.write("Move: up")
  })


  conn.on("data", () => {
    console.log("you ded cuz you idled")
  });


  return conn;
};

module.exports = {connect};