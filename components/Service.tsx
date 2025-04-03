import React from "react";
import ServiceCard from "./ServiceCard";
import { FaClock } from "react-icons/fa";
import { FaKitchenSet, FaBowlFood } from "react-icons/fa6";
import Image from "next/image";
import chef from "../public/chef.svg";

const Service = () => {
  const data = [
    {
      Icon: FaKitchenSet, // Pass icon as the component itself, not as JSX
      title: "Wide selection of restaurants",
      description:
        "We provide all kinds of food. Just feel free to pick what you like.",
    },
    {
      Icon: FaBowlFood, // Same here, use the component directly
      title: "Easy ordering process",
      description:
        "Ordering food is easy peazy you can order anytime, anywhere.",
    },
    {
      Icon: FaClock, // Use component directly here as well
      title: "Fast delivery within 20 min",
      description:
        "Fast delivery is our priority, our agents can reach you easily",
    },
  ];

  return (
    <div>
      <div className="flex gap-5 items-center justify-between w-[80vw] mx-auto py-8">
        {/* Map through the data array and render a ServiceCard for each item */}
        {data.map((item, index) => (
          <ServiceCard
            key={index}
            Icon={item.Icon} // Pass icon component as a prop
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-12">
        <Image src={chef} alt="Chef" />
      </div>
    </div>
  );
};

export default Service;
