"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchInput({ defaultValue = "" }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    const search = e.target.value;
    setValue(search);

    const category = searchParams.get("category") || "";
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (category) params.set("category", category);

    router.replace(`/all-tiles?${params.toString()}`);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Search tiles..."
      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.15)",
        color: "#fff",
      }}
    />
  );
}
