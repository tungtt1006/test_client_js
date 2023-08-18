const Redis = require("ioredis");

// Basic connection, will use defaults if object not provided.
// const redis = new Redis({
//   port: 6379,
//   host: "51.15.198.214",
//   password: "password",
// });

const redis = new Redis({
  sentinels: [
    { host: "51.158.77.5", port: 26379 },
    { host: "51.15.197.155", port: 26379 },
    { host: "51.15.198.214", port: 26379 },
  ],
  password: "password",
  name: "mymaster",
});

const ioRedisBasics = async () => {
  redis.get("name").then((result) => {
    console.log(result);
  });
};

try {
  ioRedisBasics();
} catch (e) {
  console.error(e);
}
