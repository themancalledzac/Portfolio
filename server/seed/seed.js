const db = require("../config/connection");
const { Image } = require("../models");
const imageSeed = require("./imageSeed.json");

db.once("open", async () => {
  await Image.deleteMany({});
  await Image.create(imageSeed);

  console.log("images seeded.");
  process.exit(0);
});
