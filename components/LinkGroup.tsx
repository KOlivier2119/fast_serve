import React from 'react';
import { FaSearch } from 'react-icons/fa';

const LinkGroup = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center w-full max-w-2xl rounded-full border border-gray-300 shadow-md p-1 sm:p-2 bg-white my-4">
      {/* Input Field */}
      <input
        type="text"
        className="w-full sm:flex-1 px-4 py-2 sm:py-3 text-gray-700 bg-transparent outline-none rounded-full sm:rounded-none sm:rounded-l-full"
        placeholder="Enter your location"
      />

      {/* Search Button - Mobile (icon only) */}
      <button className="sm:hidden flex items-center justify-center w-12 h-12 bg-[#396C03] text-white rounded-full transition-all duration-300 hover:bg-[#2e5202] active:scale-95 mt-2 sm:mt-0">
        <FaSearch className="text-xl" />
      </button>

      {/* Search Button - Desktop (with text) */}
      <button className="hidden sm:flex items-center gap-2 bg-[#396C03] text-white px-6 py-3 rounded-full sm:rounded-none sm:rounded-r-full transition-all duration-300 hover:bg-[#2e5202] active:scale-95">
        <FaSearch className="text-white" /> 
        <span className="whitespace-nowrap">Search</span>
      </button>
    </div>
  );
};

export default LinkGroup;