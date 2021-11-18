const { gql } = require("apollo-server-express");

// we need to define custom Scalars EVENTUALLY for our Date and Array custom Scalars
// https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/

// here is our graphql schema definition.
const typeDefs = gql`
  type Image {
    _id: ID
    title: String
    author: String
    country: String
    date: String
    aperture: String
    exposure_time: String
    focal_length: Int
    iso_speed: Int
    lens: String
    horizontal: Boolean
    location: String
    googleMaps: String
    imageUrl: String
    people: [String]
    keywords: [String]
    image_category: String
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
      date: String!
      aperture: String!
      exposure_time: String!
      focal_length: Int!
      iso_speed: Int!
      lens: String!
      horizontal: Boolean!
      location: String!
      googleMaps: String!
      imageUrl: String!
      people: [String]
      keywords: [String]
      image_category: String!
    ): Image
    removeImage(imageId: ID!): Image
  }
`;

module.exports = typeDefs;
