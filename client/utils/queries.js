import { gql } from "@apollo/client";

export const QUERY_IMAGES = gql`
  query {
    images {
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

export const SINGLE_PHOTO_QUERY = gql`
  query getSingleImage($imageId: ID!) {
    image(imageId: $imageId) {
      _id
      title
      author
      direction
      location
      googleMaps
      imageUrl
    }
  }
`;
