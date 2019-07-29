const express = require("express");
const router = express.Router();

// get list of images
router.get("/", async (req, res) => {
  try {
    const image = await db.find();
    res.status(200).json(image);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

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

router.post("/", async (req, res) => {
  try {
    const image = await db.add(req.body);
    res.status(200).json(image);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const image = await db.update(req.params.id, req.body);
    if (updated) {
      res.status(200).json(updated);
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

module.exports = router;
