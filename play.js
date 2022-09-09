let name = process.argv.slice(2);
module.exports = { name };

const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

setupInput(connect());
