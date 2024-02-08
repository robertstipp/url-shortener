const express = require("express");
const router = express.Router();

const shortenController = require("../controllers/shortenController");

router.post("/", shortenController.shorten, function (req, res) {
  console.log(res.locals.shortUrl);
  res.status(200).json(res.locals.shortUrl);
});

module.exports = router;
