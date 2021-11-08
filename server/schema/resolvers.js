const { Image } = require("../models");

const resolvers = {
  Query: {
    images: async () => {
      await Image.find().sort({ createdAt: -1 });
    },
    image: async (parent, { imageId }) => {
      return Image.findOne({ _id: imageId });
    },
  },
  Mutation: {
    addImage: async (
      parent,
      { title, author, country, location, googleMaps, imageUrl }
    ) => {
      return Image.create({
        title,
        author,
        country,
        location,
        googleMaps,
        imageUrl,
      });
    },
  },
};

module.exports = resolvers;
