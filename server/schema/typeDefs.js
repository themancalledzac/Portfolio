const { gql } = require("apollo-server-express");

// here is our graphql schema definition.
const typeDefs = gql`
  type Image {
    _id: ID
    title: String
    author: String
    country: String
    direction: String
    location: String
    googleMaps: String
    imageUrl: String
  }

  type Query {
    images: [Image]
    image(imageId: ID!): Image
  }

  type Mutation {
    addImage(
      title: String!
      author: String!
      country: String!
      direction: String!
      location: String!
      googleMaps: String!
      imageUrl: String!
    ): Image
    removeImage(imageId: ID!): Image
  }
`;

module.exports = typeDefs;
