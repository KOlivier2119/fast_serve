import React from "react";
import Badge from "./Badge";
import LinkGroup from "./LinkGroup";
import Image from "next/image";
import plate from "../public/plate.svg";

const Hero = () => {
  return (
    <div style={{ backgroundColor: "rgba(107, 145, 66, 0.1)" }}> {/* 10% Opacity */}
      <div className="h-[90vh] w-[80vw] mx-auto flex items-center px-10 relative">
        
        {/* Badge Positioned at Top-Right */}
        <Badge />

        {/* Left Content */}
        <div className="w-1/2">
          <h1 className="text-[#396C03] text-5xl font-bold leading-tight">
            Order food online
          </h1>
          <h1 className="text-[#396C03] text-5xl font-bold leading-tight">
            from your favorite
          </h1>
          <h1 className="text-[#396C03] text-5xl font-bold leading-tight">
            local restaurants.
          </h1>
          <p className="text-[#676767] text-lg mt-4 max-w-lg">
            Freshly made food delivered to your door.
          </p>
          <LinkGroup />
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center items-center">
          <Image src={plate} alt="Food" />
        </div>

      </div>
    </div>
  );
};

export default Hero;
