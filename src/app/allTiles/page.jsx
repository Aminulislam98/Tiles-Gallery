import Image from "next/image";
// import { HiSearch } from "react-icons/hi";

// import Footer from "@/components/layout/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import TileCard from "@/components/TileCard";
import Footer from "@/components/shared/Footer/Footer";
import CategoryButton from "@/components/ui/CategoryButton";
import SearchInput from "@/components/ui/SearchInput";
import { Suspense } from "react";

export async function generateMetadata({ searchParams }) {
  const sp = await searchParams;
  const category = sp.category || "";
  if (category) {
    return {
      title: `${category.charAt(0).toUpperCase() + category.slice(1)} Tiles — TilesGallery`,
      description: `Browse our premium ${category} tile collection.`,
    };
  }
  return {
    title: "All Tiles — TilesGallery",
    description: "Browse our complete collection of premium artisan tiles.",
  };
}

const getTilesRes = async () => {
  const response = await fetch(
    `https://tiles-gallery-server-1.onrender.com/tiles`,
  );
  return await response.json();
};

export default async function AllTilesPage({ searchParams }) {
  const sp = await searchParams;

  const category = (await sp.category) || "";
  const title = (await sp.title) || "";

  const allTilesData = await getTilesRes();

  const allTiles = allTilesData.filter((tile) => {
    const matchCategory = category
      ? tile?.category?.toLowerCase().replace(" ", "-") ===
        category?.toLowerCase()
      : true;
    const matchSearch = title
      ? tile?.title?.toLowerCase().includes(title?.toLowerCase())
      : true;
    return matchCategory && matchSearch;
  });

  const categories = [
    {
      id: "cat-0",
      name: "AllTiles",
    },

    {
      id: "cat-2",
      name: "Marble",
      slug: "marble",
    },
    {
      id: "cat-3",
      name: "Terracotta",
      slug: "terracotta",
    },
    {
      id: "cat-4",
      name: "Natural Stone",
      slug: "natural-stone",
    },
    {
      id: "cat-1",
      name: "Zellige",
      slug: "zellige",
    },
    {
      id: "cat-5",
      name: "Ceramic",
      slug: "ceramic",
    },
    {
      id: "cat-6",
      name: "Cement",
      slug: "cement",
    },
    {
      id: "cat-7",
      name: "Encaustic",
      slug: "encaustic",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ── Hero banner with real photo ── */}
      <section className="relative pt-[60px]">
        <div className="relative h-96">
          <Image
            src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=1800&q=85"
            alt="All tiles banner"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(15,14,12,0.72)" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#B85C38" }}
            >
              Premium Collection
            </p>
            <h1
              className="font-display font-light text-white leading-tight mb-4"
              style={{
                fontSize: "clamp(44px,6vw,72px)",
                letterSpacing: "-2px",
              }}
            >
              The{" "}
              <em className="font-light" style={{ color: "#D4724D" }}>
                Gallery
              </em>
            </h1>
            <p
              className="text-sm font-light mb-7"
              style={{ color: "rgba(255,255,255,0.5)", maxWidth: "480px" }}
            >
              Browse our complete collection of premium artisan tiles.
            </p>
            <Suspense fallback={<div>Loading...</div>}>
              <SearchInput></SearchInput>
            </Suspense>
          </div>
        </div>

        {/* Category pills */}
        <div
          className="sticky top-[60px] z-40"
          style={{ background: "#FAF7F2", borderBottom: "1px solid #E4DFD8" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-2 py-4 overflow-x-auto">
              {categories.map((cat) => (
                <CategoryButton key={cat.id} cat={cat}></CategoryButton>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl w-full mx-auto md:px-3 py-14">
        {allTiles.length === 0 ? (
          <div className="text-center py-24">
            <p
              className="font-display text-3xl mb-2"
              style={{ color: "#8C8880" }}
            >
              No tiles found
            </p>
            <p className="text-sm" style={{ color: "#8C8880" }}>
              Try a different search or category.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3  md:gap-3 lg:gap-6">
              {allTiles.map((tile, i) => (
                <TileCard key={i} tile={tile} />
              ))}
            </div>
          </>
        )}
      </section>

      <Footer />
    </>
  );
}
