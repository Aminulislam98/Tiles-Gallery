"use client";

import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";

const SearchInput = () => {
  const [search, setSearch] = useState();
  return (
    <div>
      {/* Search */}
      <div className="relative max-w-lg">
        <HiSearch
          className="absolute left-4 top-1/2 -translate-y-1/2"
          size={17}
          style={{ color: "rgba(255,255,255,0.4)" }}
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, material, style..."
          className="w-full pl-11 pr-5 py-3.5 rounded-xl text-sm text-white outline-none"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        />
      </div>
    </div>
  );
};

export default SearchInput;
