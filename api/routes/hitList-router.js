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

// post endpoint to add to hitList
// can only post if there is nothing else in the other table

// delete end point
// first find any instance of script in a different table
// if true then delete?

router.get("/", async (req, res) => {
  try {
    const title = await db.find();
    res.status(200).json(title);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
