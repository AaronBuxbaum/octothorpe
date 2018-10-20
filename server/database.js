const Redis = require("ioredis");

const client = new Redis({
    host: "redis"
});

module.exports = client;
