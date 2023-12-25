export const Grow = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-gray-600 bg-opacity-75 z-50">
      <div className="relative inline-flex">
        {/* Outer  layer */}
        <div className="w-16 h-16 bg-gray-800 rounded-full animate-ping"></div>

        {/* Inner layer */}
        <div className="w-16 h-16 bg-gray-400 rounded-full absolute top-0 left-0 animate-pulse"></div>
      </div>
    </div>
  );
};


