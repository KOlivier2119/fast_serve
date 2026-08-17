"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon, Location01Icon } from "@hugeicons/core-free-icons";

const LinkGroup = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("Please enter your location to continue.");
      return;
    }
    setError("");
    router.push("/register");
  };

  return (
    <div className="w-full max-w-lg">
      <form
        onSubmit={handleSearch}
        className="flex items-center w-full bg-white rounded-full shadow-lg p-1.5"
      >
        <div className="flex items-center pl-3 pr-2 text-[#396C03] flex-shrink-0">
          <HugeiconsIcon icon={Location01Icon} size={18} color="#396C03" strokeWidth={2} />
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (error) setError("");
          }}
          className="flex-1 py-2.5 pr-2 text-gray-700 bg-transparent outline-none placeholder:text-gray-400 text-sm md:text-base"
          placeholder="Enter your location..."
          aria-label="Search location"
          aria-invalid={!!error}
        />

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
      {error && (
        <p className="mt-2 text-sm text-white/90 text-center lg:text-left" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default LinkGroup;
