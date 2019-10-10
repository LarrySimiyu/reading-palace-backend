const express = require("express");
const configMiddleware = require("./middleware/serversetup");

const server = express();
configMiddleware(server);

server.get("/", (req, res) => {
  res.send("Hello its working");
});

module.exports = server;
