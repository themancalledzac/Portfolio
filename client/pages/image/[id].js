import SingleImage from "../../components/SingleImage";

export default function SinglePhotoPage({ query }) {
  console.log(query);
  if (query) return <SingleImage imageId={query._id} />;
  return <SingleImage imageId='618ef9081145f3d874ba4cd6' />;
}
