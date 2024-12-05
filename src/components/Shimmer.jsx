import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4 h-96">
      {Array(12) // Adjust the number of shimmer cards
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className=" w-48 p-4 bg-gray-200 rounded-lg animate-pulse"
          >
            {/* Image Placeholder */}
            <div className="h-28 bg-gray-300 rounded-lg"></div>

            {/* Title Placeholder */}
            <div className="mt-4 h-4 bg-gray-300 rounded"></div>

            {/* Subtitle Placeholder */}
            <div className="mt-2 h-3 bg-gray-300 rounded w-3/4"></div>

            {/* Price Placeholder */}
            <div className="mt-4 h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
