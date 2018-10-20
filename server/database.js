const Redis = require("ioredis");

const REDIS_PORT = 6000;
const client = new Redis(REDIS_PORT);

module.exports = client;
