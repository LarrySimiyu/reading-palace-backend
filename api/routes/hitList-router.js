const express = require("express");
const router = express.Router();
const db = require("../models/hitList-model");
router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const title = await db.find();

    title.sort(function(a, b) {
      if (a.Title < b.Title) {
        return -1;
      }
      if (a.Tile > b.Title) {
        return 1;
      }
      return 0;
    });

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
router.post("/", async (req, res) => {
  try {
    const response = await db.add(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const count = await db.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({
        message: "Film was deleted"
      });
    } else {
      res.status(400).json({
        message: "Image could not be found"
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error deleting"
    });
  }
});

module.exports = router;
