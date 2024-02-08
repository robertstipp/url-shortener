const crypto = require("crypto");

const redisClients = require("../models/redisClient.js");
const controller = {};

controller.shorten = async function (req, res, next) {
  const { url } = req.body;

  try {
    if (!url) throw new Error("No Url Provided");
    // Hash URL
    const hash = crypto.createHash("sha256").update(url).digest("hex");
    // Truncate based on length
    const length = 6;
    const shortened = length ? hash.substring(0, length) : hash;

    // Store in redis

    if (/[a-gA-G]/.test(hash[0])) {
      await redisClients.default.set(shortened, url);
    } else {
      await redisClients.another.set(shortened, url);
    }

    res.locals.shortUrl = shortened;
    return next();
  } catch (error) {
    return next("Error");
  }
};

module.exports = controller;
