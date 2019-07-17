const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// rouuters

const userRouter = require("../routes/user-router");

// exports
module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use("/api/user", userRouter);
  server.use("/api/hitList", hitListRouter);
};
