const express = require("express");
const router = express.Router();
const db = require("../models/film-model");

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const film = await db.find();
    res.status(200).json(film);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// post router
router.post("/", async (req, res) => {
  try {
    const film = await db.add();
    res.status(200).json(film);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
