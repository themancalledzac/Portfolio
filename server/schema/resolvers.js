const { Image } = require("../models");

const resolvers = {
  Query: {
    images: async (parent) => {
      return Image.find().sort({ createdAt: -1 });
    },
    image: async (parent, { imageId }) => {
      return Image.findOne({ _id: imageId });
    },
  },
  Mutation: {
    addImage: ({ title, author, country, location, googleMaps, imageUrl }) => {
      return Image.create({
        title,
        author,
        country,
        direction,
        location,
        googleMaps,
        imageUrl,
      });
    },
    removeImage: ({ imageId }) => {
      return Image.findOneAndDelete({ _id: imageId });
    },
  },
};

module.exports = resolvers;
