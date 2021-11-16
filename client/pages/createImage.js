import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { CREATE_IMAGE } from "../utils/mutations";

const CreateImage = () => {
  const [formData, setFormData] = useState({
    title: "Title",
    author: "Author",
    country: "Country",
    direction: "Horizontal",
    location: "location",
    googleMaps: "",
    imageUrl: "",
  });

  const [createImage, { error }] = useMutation(CREATE_IMAGE);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createImage({
        variables: { ...formData },
      });
    } catch (err) {
      console.error(err);
    }
    setFormData({
      title: "title",
      author: "Zechariah Edens",
      country: "USA",
      direction: "direction",
      location: "location",
      googleMaps: "Google Maps Link.",
      imageUrl: "Image URL",
    });
  };

  return (
    <div>
      <div>
        <h1>let's create an image</h1>
      </div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <label>Title</label>
          <input name='title' type='text' onChange={handleInputChange} />
          <label>Author</label>
          <input name='author' type='text' onChange={handleInputChange} />
          <label>Country</label>
          <input name='country' type='text' onChange={handleInputChange} />
          <label>Horizontal or Vertical</label>
          <input name='direction' type='text' onChange={handleInputChange} />
          <label>location</label>
          <input name='location' type='text' onChange={handleInputChange} />
          <label>google maps link</label>
          <input name='googleMaps' type='text' onChange={handleInputChange} />
          <label>image url</label>
          <input name='imageUrl' type='text' onChange={handleInputChange} />
          <button type='submit'>Create Image</button>
        </form>
      </div>
    </div>
  );
};

export default CreateImage;
