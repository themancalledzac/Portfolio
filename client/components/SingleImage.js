import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { SINGLE_PHOTO_QUERY } from "../utils/queries";

// export const SINGLE_PHOTO_QUERY = gql`
//   query image($_id: String) {
//     image(_id: $_id) {
//       title
//       author
//       direction
//       location
//       googleMaps
//       imageUrl
//     }
//   }
// `;

export default function SingleImage({ id }) {
  const { data, loading, error } = useQuery(SINGLE_PHOTO_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  const { Image } = data;
  return (
    <div>
      <title>{Image.title}</title>
      <img src={Image.imageUrl} alt='' />
    </div>
  );
}
