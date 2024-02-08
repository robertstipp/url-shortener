const express = require("express");
const router = express.Router();
const path = require("path");

// Home page route.
router.get("/", function (req, res) {
  res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
});

// About page route.

module.exports = router;
