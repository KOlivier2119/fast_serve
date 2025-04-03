import React from 'react';

const Badge = () => {
  return (
    <div
      className="absolute top-30 right-10 flex flex-col items-center justify-center p-4 bg-white/30 backdrop-blur-lg rounded-lg shadow-md"
    >
      <h1 className="text-[#FF8B00] text-3xl font-extrabold">200k+</h1>
      <p className="text-white text-lg font-medium">People Delivered</p>
    </div>
  );
};

export default Badge;
