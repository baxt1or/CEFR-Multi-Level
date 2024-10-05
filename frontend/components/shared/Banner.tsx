import React from "react";

const Banner = ({ label }: { label: string }) => {
  return (
    <div className="w-full bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto pl-6">
        <h1 className="text-2xl font-normal">
          CEFR Multi-Level <span className="text-red-500">{label} </span>Test
        </h1>
      </div>
    </div>
  );
};

export default Banner;
