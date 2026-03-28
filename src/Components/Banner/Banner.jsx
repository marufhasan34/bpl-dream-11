import React from "react";
import bgImg from "../../assets/bg-shadow.png";
import bannerImg from "../../assets/banner-main.png";

const Banner = () => {
  return (
     <div className="relative container mx-auto p-12 mt-7  w-full">
      <div
        className="absolute rounded-full inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/50 to-black/80"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    
        <img
          src={bannerImg} 
          alt="Cricket Logo"
          className="w-32 h-auto mb-6"
        />
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        <p className="text-gray-300 text-lg mb-6">
          Beyond Boundaries Beyond Limits
        </p>
        <button className="bg-yellow-400 cursor-pointer hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-md shadow-lg transition duration-300">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
