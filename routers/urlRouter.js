const express = require("express");
const router = express.Router();

const urlController = require("../controllers/urlController");

router.get("/", function (req, res) {
  return res.status(200).send("hello\n");
});

router.get("/:shortened", urlController.getUrl, function (req, res) {
  const url = res.locals.url;
  if (url) {
    return res.redirect(url);
  } else {
    res.send("Not URL");
  }
});

module.exports = router;
