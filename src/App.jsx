import Home from "./components/Home";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10 px-4">

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          PixelBoost AI
        </h1>
        <p className="text-gray-500 mt-2">
          AI powered image resolution enhancement
        </p>
      </div>

      <Home />

      <footer className="text-sm text-gray-400 mt-10">
        Built by Agrim Mishra
      </footer>

    </div>
  );
};

export default App;