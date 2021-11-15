import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useEffect } from "react";
import { SINGLE_PHOTO_QUERY } from "../utils/queries";

export default function SingleImage({ imageId }) {
  const { data, loading, error } = useQuery(SINGLE_PHOTO_QUERY, {
    variables: {
      imageId,
    },
  });

  useEffect(() => {
    console.log("our use effect refreshing with new data yo");
    console.log(data);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h1>{data.image.title}</h1>
    </div>
  );
}
