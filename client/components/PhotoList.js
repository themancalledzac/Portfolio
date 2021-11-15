const PhotoList = ({
  images,
  title,
  author,
  direction,
  location,
  googleMaps,
  imageUrl,
}) => {
  if (!images.length) {
    return <h3>No Images Yet...</h3>;
  }

  return (
    <div>
      <h3>Images</h3>
      {images &&
        images.map((image) => (
          <div key={image._id}>
            <h4>{image.author}</h4>
            <p>{image.direction}</p>
            <p>{image.location}</p>
            <p>{image.googleMaps}</p>
            <img src={image.imageUrl} style={{ width: "500px" }}></img>
          </div>
        ))}
    </div>
  );
};

export default PhotoList;
