const express = require("express");
const configMiddleware = require("./middleware/serversetup");

const server = express();
configMiddleware(server);

server.get("/", async (req, res) => {
  await res.status(200).json({
    message: "Server up and running"
  });
});

module.exports = server;
