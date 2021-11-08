const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    default: "Zechariah Edens",
  },
  country: {
    type: String,
    required: true,
    default: "USA",
  },
  location: {
    type: String,
    required: true,
  },
  googleMaps: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Image = model("Image", imageSchema);

module.exports = Image;
