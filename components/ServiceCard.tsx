import React from 'react';

interface Props {
  Icon: React.ElementType;  // Accept icon as a component
  title: string;
  description: string;
}

const ServiceCard = ({ Icon, title, description }: Props) => {
  return (
    <div className="flex gap-5">
      <div
        className="rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
        style={{
          backgroundColor: "rgba(57, 108, 3, 0.05)",  // Set the background color with 5% opacity
        }}
      >
        <Icon className="text-[#396C03] mb-4 text-5xl" /> {/* Display the icon */}
        <h1 className="text-2xl font-semibold text-[#3F3F3F]">{title}</h1>
        <p className="text-[#676767] mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
