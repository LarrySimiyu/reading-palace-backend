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

module.exports = router;
