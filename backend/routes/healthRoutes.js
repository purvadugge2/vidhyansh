const express = require("express");
const router = express.Router();

const { healthCheck } = require("../controllers/healthController");

router.get("/health", healthCheck);
router.get("/hello", (req, res) => {
  res.json({ message: "Hello from Vidhyansh backend" });
});


module.exports = router;
