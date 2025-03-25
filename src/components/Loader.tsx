import React from "react";

const Loader: React.FC = () => {
  return (
    <div
      className="w-12 h-12 border-4 border-t-4 border-t-deep-green border-transparent rounded-full animate-spin"
      role="status"
      aria-label="Loading"
    ></div>
  );
};

export default Loader;
