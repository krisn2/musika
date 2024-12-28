import React from "react";
import Search from "./Search";

const Hero = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Search/>
        <div className="flex flex-col items-center mt-20 gap-8 text-center">
          <h1 className="text-6xl font-semibold text-blue-50 ">Welcome to Musika</h1>
        </div>
    </div>
  );
};

export default Hero;
