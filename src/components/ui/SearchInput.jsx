"use client";
import { useState } from "react";
import { HiSearch } from "react-icons/hi";

export default function SearchInput() {
  const [searchInput, setSearchInput] = useState("");
  const inputHandler = () => {
    console.log(searchInput);
    // setSearchInput("");
  };
  return (
    <div className="flex items-center gap-2 max-w-lg">
      {/* Input */}
      <div
        className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl"
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <HiSearch size={16} style={{ color: "rgba(255,255,255,0.4)" }} />
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search tiles..."
          className="flex-1 bg-transparent text-sm outline-none text-white placeholder-white/40"
        />
      </div>

      {/* Button */}
      <button
        onClick={inputHandler}
        className="px-5 py-3 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-80"
        style={{ background: "#B85C38" }}
      >
        Search
      </button>
    </div>
  );
}
