import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { QUERY_IMAGES, SINGLE_PHOTO_QUERY } from "../utils/queries";

function PhotosComponent() {
  const { error, loading, data } = useQuery(QUERY_IMAGES);

  useEffect(() => {
    console.log(data);
    console.log("trying to get all images from QUERY_IMAGES query yo");
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      {data.images.map((image) => {
        <p>{image.title}</p>;
        <p>{image.author}</p>;
      })}
    </div>
  );
}

export default PhotosComponent;
