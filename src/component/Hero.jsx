import React from "react";
import Search from "./Search";

const Hero = () => {
  return (
    <div className="relative">
      <Search />
      <div className="flex flex-col items-center mt-20 gap-8 text-center">
        <h1 className="text-6xl font-semibold text-blue-50 ">
          Welcome to Musika
        </h1>
      </div>
      <div className="relative top-20 w-full bg-black bg-opacity-50 text-blue-50 rounded-xl h-full flex flex-col items-center">
        <div className="flex flex-row gap-8 mt-20 mb-5">
          <div className="bg-purple-600 bg-opacity-50 w-40 h-60 rounded-xl"></div>
          <div className="bg-purple-600 bg-opacity-50 w-40 h-60 rounded-xl"></div>
          <div className="bg-purple-600 bg-opacity-50 w-40 h-60 rounded-xl"></div>
          <div className="bg-purple-600 bg-opacity-50 w-40 h-60 rounded-xl"></div>
          <div className="bg-purple-600 bg-opacity-50 w-40 h-60 rounded-xl"></div>
        </div>
        <div className="flex flex-row justify-center items-center gap-8 mt-20 mb-5">
          <div className="bg-purple-600 bg-opacity-50 w-40 h-60 rounded-xl"></div>
          <div className="bg-purple-600 bg-opacity-50 w-40 h-60 rounded-xl"></div>
          <div className="bg-purple-600 bg-opacity-50 w-40 h-60 rounded-xl"></div>
          <div className="bg-purple-600 bg-opacity-50 w-40 h-60 rounded-xl"></div>
          <div className="bg-purple-600 bg-opacity-50 w-40 h-60 rounded-xl"></div>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
