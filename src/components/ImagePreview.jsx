import Loading from "./Loading";

const ImagePreview = ({ uploaded, enhanced, loading }) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
      
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <h2 className="text-lg font-semibold text-center bg-gray-800 text-white py-2">
          Original
        </h2>

        {uploaded ? (
          <img
            src={uploaded}
            alt="Original"
            className="w-full h-80 object-contain"
          />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-200">
            No Image Selected
          </div>
        )}
      </div>

      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <h2 className="text-lg font-semibold text-center bg-blue-700 text-white py-2">
          Enhanced
        </h2>

        {loading ? (
          <div className="h-80 flex items-center justify-center">
            <Loading />
          </div>
        ) : enhanced ? (
          <div className="flex flex-col items-center">
            <img
              src={enhanced}
              alt="Enhanced"
              className="w-full h-80 object-contain"
            />

            <a
              href={enhanced}
              download="enhanced-image.png"
              className="mt-3 mb-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Download Image
            </a>
          </div>
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-200">
            No Enhanced Image
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;