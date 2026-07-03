"use client";

import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon, Location01Icon } from "@hugeicons/core-free-icons";

const LinkGroup = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search handler — extend with routing or API call
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center w-full max-w-lg bg-white rounded-full shadow-lg p-1.5"
    >
      {/* Location icon */}
      <div className="flex items-center pl-3 pr-2 text-[#396C03] flex-shrink-0">
        <HugeiconsIcon icon={Location01Icon} size={18} color="#396C03" strokeWidth={2} />
      </div>

      {/* Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 py-2.5 pr-2 text-gray-700 bg-transparent outline-none placeholder:text-gray-400 text-sm md:text-base"
        placeholder="Enter your location..."
        aria-label="Search location"
      />

      {/* Search button */}
      <button
        type="submit"
        className="flex items-center gap-2 bg-[#396C03] hover:bg-[#2e5202] text-white font-semibold
                   pl-5 pr-6 py-3 rounded-full transition-all duration-200 active:scale-95 flex-shrink-0 shadow-sm"
        aria-label="Search"
      >
        <HugeiconsIcon icon={Search01Icon} size={16} color="white" strokeWidth={2.5} />
        <span className="hidden sm:inline whitespace-nowrap text-sm">Search</span>
      </button>
    </form>
  );
};

export default LinkGroup;