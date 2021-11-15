import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { QUERY_IMAGES, SINGLE_PHOTO_QUERY } from "../utils/queries";
import PhotoList from "./PhotoList";

const PhotosComponent = () => {
  const { loading, data } = useQuery(QUERY_IMAGES);

  useEffect(() => {
    console.log(data);
    console.log("trying to get all images from QUERY_IMAGES query yo");
  }, [data]);

  if (loading) return <p>Loading...</p>;
  const images = data?.images || [];

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <PhotoList
          images={images}
          title={images.title}
          author={images.author}
          direction={images.direction}
          location={images.location}
          googleMaps={images.googleMaps}
          imageUrl={images.imageUrl}
        />
      )}
    </div>
  );
};

export default PhotosComponent;
