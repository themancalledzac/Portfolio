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
  date: {
    type: String,
    required: true,
  },
  aperture: {
    type: String,
    required: true,
    default: "f4",
  },
  exposure_time: {
    type: String,
    required: true,
    default: "1/60",
  },
  focal_length: {
    type: Number,
    required: true,
    default: 70,
  },
  iso_speed: {
    type: Number,
    required: true,
    default: 100,
  },
  lens: {
    type: String,
    required: true,
    default: "NIKKOR Z 24-70mm f/4 S",
  },
  horizontal: {
    type: Boolean,
    required: true,
    default: true,
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
  people: [String],
  keywords: [String],
  image_category: {
    type: String,
    required: true,
    default: "Landscape",
  },
});

const Image = model("Image", imageSchema);

module.exports = Image;
