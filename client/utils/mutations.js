import { gql } from "@apollo/client";

export const CREATE_IMAGE = gql`
  mutation addImage(
    $title: String!
    $author: String!
    $country: String!
    $direction: String!
    $location: String!
    $googleMaps: String!
    $imageUrl: String!
  ) {
    addImage(
      title: $title
      author: $author
      country: $country
      direction: $direction
      location: $location
      googleMaps: $googleMaps
      imageUrl: $imageUrl
    ) {
      _id
      title
      author
      country
      direction
      location
      googleMaps
      imageUrl
    }
  }
`;
