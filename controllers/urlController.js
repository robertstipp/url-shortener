const fs = require("fs/promises");

const controller = {};

const redisClients = require("../models/redisClient.js");

controller.getUrl = async function (req, res, next) {
  const { shortened } = req.params;

  try {
    let url = "";
    if (/[a-gA-G]/.test(shortened[0])) {
      url = await redisClients.default.get(shortened);
    } else {
      url = await redisClients.another.get(shortened);
    }
    res.locals.url = url;
    return next();
  } catch (error) {
    return next("Error");
  }
};

module.exports = controller;
