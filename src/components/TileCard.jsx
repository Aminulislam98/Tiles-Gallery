import Image from "next/image";
import Link from "next/link";

// size: "sm" | "md" | "lg"
export default function TileCard({ tile, size = "md" }) {
  const imgH = size === "lg" ? "h-64" : size === "sm" ? "h-44" : "h-52";

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "#fff",
        border: "1px solid #E4DFD8",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      {/* Image */}
      <div className={`relative ${imgH} overflow-hidden`}>
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
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
      <div className="p-4">
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
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold" style={{ color: "#0F0E0C" }}>
            ${tile.price.toFixed(2)}
          </span>
          <Link
            href={`/tile/${tile.id}`}
            className="px-4 py-1.5 rounded-lg text-sm font-medium text-white transition-colors hover:opacity-80"
            style={{ background: "#0F0E0C" }}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
