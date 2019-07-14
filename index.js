require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = require("./api/server");

server.use(cors());
server.use(helmet());
server.use(express.json());

const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`server on port ${port}`));
