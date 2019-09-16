const express = require("express");
const router = express.Router();
const db = require("../models/screenplayImage-model");

// get list of images
router.get("/", async (req, res) => {
  try {
    const image = await db.find();
    res.status(200).json(image);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//get image
router.get("/:id", async (req, res) => {
  try {
    const image = await db.findById(req.params.id);
    if (image) {
      res.status(200).json(image);
    } else {
      res.status(500).json(error.message);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//post image
router.post("/", async (req, res) => {
  try {
    const image = await db.add(req.body);
    res.status(200).json(image);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//edit image
router.put("/:id", async (req, res) => {
  try {
    const image = await db.update(req.params.id, req.body);
    if (image) {
      res.status(200).json(image);
    } else {
      res.status(500).json({
        message: "id not found"
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error updating"
    });
  }
});

//delete image
router.delete("/:id", async (req, res) => {
  try {
    const count = await db.remove(req.params.id);
    if (count > 0) {
      // checking if id is greater than 0
      res.status(200).json({
        message: "image deleted"
      });
    } else {
      res.status(400).json({
        message: "image could not be found"
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error deleting"
    });
  }
});

module.exports = router;
