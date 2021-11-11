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
  query image($id: ID!) {
    query {
      image(where: { id: $id }) {
        title
        author
        direction
        location
        googleMaps
        imageUrl
      }
    }
  }
`;
