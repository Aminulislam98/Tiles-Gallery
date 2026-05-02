import Image from "next/image";
import Link from "next/link";

// size: "sm" | "md" | "lg"
export default function TileCard({ tile }) {
  return (
    <div
      className="md:rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 sm:hover:-translate-y-1 w-full"
      style={{
        background: "#fff",
        border: "1px solid #E4DFD8",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      {/* Image */}
      <div className={`relative overflow-hidden max-w-full w-full h-64 `}>
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className="object-cover transition-transform duration-500 sm:hover:scale-105"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        {/* Category badge */}
        <span
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{ background: "rgba(249,246,241,0.92)", color: "#3A3835" }}
        >
          {tile.category}
        </span>
        {/* Stock badge */}
        <span
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
          style={{ background: tile.inStock ? "#4A6741" : "#8C8880" }}
        >
          {tile.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* Body */}
      <div className="p-2 md:p-4 flex flex-col flex-1">
        <p
          className="text-xs font-medium uppercase tracking-wide mb-1"
          style={{ color: "#8C8880" }}
        >
          {tile.material} · {tile.dimensions}
        </p>
        <h3
          className="font-display text-lg font-medium leading-tight mb-3"
          style={{ color: "#0F0E0C" }}
        >
          {tile.title}
        </h3>
        <div className="flex items-center justify-between mt-auto ">
          <span className="text-lg font-semibold" style={{ color: "#0F0E0C" }}>
            ${tile.price.toFixed(2)}
          </span>
          <Link
            href={`/allTiles/${tile.id}`}
            className="px-2 md:px-4 py-1 md:py-1.5 rounded md:rounded-lg text-sm font-medium text-white transition-colors hover:opacity-80"
            style={{ background: "#0F0E0C" }}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
