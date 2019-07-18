const express = require("express");
const router = express.Router();
const db = require("../models/hitList-model");
router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const title = await db.find();
    res.status(200).json(title);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
