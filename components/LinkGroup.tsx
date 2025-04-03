import React from 'react';
import { FaSearch } from 'react-icons/fa';

const LinkGroup = () => {
  return (
    <div className="flex items-center w-full max-w-md rounded-full border border-gray-300 shadow-md p-2 bg-white my-4">
      {/* Input Field */}
      <input
        type="text"
        className="flex-1 px-4 py-2 text-gray-700 bg-transparent outline-none rounded-full"
        placeholder="Enter your location"
      />

      {/* Search Button */}
      <button className="flex items-center gap-2 bg-[#396C03] text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-[#2e5202] active:scale-95">
        <FaSearch className="text-white" /> Search
      </button>
    </div>
  );
};

export default LinkGroup;
