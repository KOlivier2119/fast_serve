import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import bicyle from "../public/biker.svg";

const Explore = () => {
  return (
    <div style={{ backgroundColor: "rgba(255, 139, 0, 0.05)" }}>
      <div className="flex w-[80vw] mx-auto items-center py-4 text-[#676767]">
        <div className="w-1/2">
          <h1 className="text-2xl text-[#396C03]">
            Explore your favorite city's food.
          </h1>
          <p>We provide different kind of popular dishes from different</p>
          <p>
            countries and they are prepared and served by their country natives.
          </p>
          <p>Join us to enjoy these beautiful dishes together.</p>
          <button className="py-3 px-5 bg-[#396C03] rounded-full flex items-center gap-2 mt-2 text-white">
            Explore <FaArrowRight />
          </button>
        </div>
        <div className="w-1/2">
          <Image src={bicyle} width={500} height={500} alt="Bicycle rider" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
