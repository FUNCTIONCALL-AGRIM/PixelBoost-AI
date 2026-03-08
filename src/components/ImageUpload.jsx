const ImageUpload = ({ uploadImageHandler }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      return;
    }

    uploadImageHandler(file);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500"
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />

        <p className="text-gray-700 font-medium">
          Click to upload an image
        </p>

        <p className="text-sm text-gray-400 mt-1">
          PNG, JPG supported
        </p>
      </label>
    </div>
  );
};

export default ImageUpload;