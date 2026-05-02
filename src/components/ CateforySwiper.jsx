"use client";
import { useRef, useState } from "react";
import CategoryButton from "@/components/ui/CategoryButton";
import { HiChevronRight } from "react-icons/hi";

export default function CategorySwiper({ categories }) {
  const scrollRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  return (
    <div className="flex items-center gap-2 px-2  py-4">
      {/* Scrollable row */}
      <div
        ref={scrollRef}
        onScroll={() => setScrolled(scrollRef.current?.scrollLeft > 10)}
        className="flex gap-2 overflow-x-auto flex-1"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {categories.map((cat) => (
          <div key={cat.id} className="flex-shrink-0">
            <CategoryButton cat={cat} />
          </div>
        ))}
      </div>

      {/* Arrow — mobile only, hides after scroll */}
      {!scrolled && (
        <div
          className="md:hidden flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center animate-pulse"
          style={{
            background: "#fff",
            border: "1px solid #E4DFD8",
            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
          }}
        >
          <HiChevronRight size={12} style={{ color: "#B85C38" }} />
        </div>
      )}
    </div>
  );
}
