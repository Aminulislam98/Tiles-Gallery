"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const CategoryButton = ({ cat }) => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  const isActive = cat.slug
    ? currentCategory === cat.slug
    : currentCategory === null;

  return (
    <div>
      <Link
        href={cat?.slug ? `?category=${cat.slug.toLowerCase()}` : "/allTiles"}
        key={cat.id}
        // onClick={() => setActiveCategory(cat)}
        className={`uppercase tracking-widest hover:text-[#D4724D] px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex justify-center items-center ${isActive ? "text-white bg-[#8C8880] hover:text-white" : "text-[#0F0E0C] transparent  "}`}
        // style={{
        //   background:
        //     activeCategory === cat ? "#0F0E0C" : "transparent",
        //   color: activeCategory === cat ? "#fff" : "#8C8880",
        // }}
      >
        {cat.name}
      </Link>
    </div>
  );
};

export default CategoryButton;
