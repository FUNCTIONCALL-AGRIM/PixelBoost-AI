import { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { enhancedImageAPI } from "../utils/enhanceImageApi";

const Home = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadImageHandler = async (file) => {
    setLoading(true);
    setError(null);
    setEnhancedImage(null);

    const preview = URL.createObjectURL(file);
    setUploadedImage(preview);

    try {
      const result = await enhancedImageAPI(file);

      if (!result?.image) {
        throw new Error("Invalid API response");
      }

      setEnhancedImage(result.image);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const resetHandler = () => {
    setUploadedImage(null);
    setEnhancedImage(null);
    setError(null);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <ImageUpload uploadImageHandler={uploadImageHandler} />

      {error && (
        <div className="mt-4 px-4 py-2 bg-red-100 text-red-600 rounded-md">
          {error}
        </div>
      )}

      <ImagePreview
        loading={loading}
        uploaded={uploadedImage}
        enhanced={enhancedImage}
      />

      {(uploadedImage || enhancedImage) && (
        <button
          onClick={resetHandler}
          className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-black"
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Home;