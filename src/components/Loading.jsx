const Loading = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-3 text-sm text-gray-500">
        Processing image...
      </p>
    </div>
  );
};

export default Loading;