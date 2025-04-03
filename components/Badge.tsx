import React from 'react';

const Badge = () => {
  return (
    <div
      className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg relative"
    >
      <h1 className="text-[#FF8B00] text-2xl font-extrabold">200k+</h1>
      <p className="text-white text-lg font-medium">People Delivered</p>
    </div>
  );
};

export default Badge;
