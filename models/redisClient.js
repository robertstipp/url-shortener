const { createClient } = require("redis");

const NODE_ENV = process.env.NODE_ENV || "dev";

// Configuration for multiple Redis instances
const redisConfigs = {
  dev: {
    // Assuming local setup for development
  },
  prod: {
    // Configuration for a production Redis instance
    url: `redis://34.74.230.87:6379`,
  },
  anotherProd: {
    // Configuration for another production Redis instance
    url: `redis://34.138.144.93:6379`,
  },
};

function createRedisClient(config) {
  const client = createClient(config);
  client.on("error", (err) => console.log("Redis Client Error", err));
  client.connect().then(() => {
    console.log("Connected to Redis", config.url || "local instance");
  });
  return client;
}

const redisClients = {
  default: createRedisClient(redisConfigs["prod"]),
  another: createRedisClient(redisConfigs["anotherProd"]),
};

module.exports = redisClients;
