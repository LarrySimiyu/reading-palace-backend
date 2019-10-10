const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const server = express();
// rouuters

const userRouter = require("../routes/user-router");
const filmInfoRouter = require("../routes/filmInfo-router");
const hitListRouter = require("../routes/hitList-router");
const screenplayImgRouter = require("../routes/screenplayImage-router");
server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
server.use("/api/user", userRouter);
server.use("/api/hitList", hitListRouter);
server.use("/api/filmInfo", filmInfoRouter);
server.use("/api/screenplayImage", screenplayImgRouter);
// exports
module.exports = server;
