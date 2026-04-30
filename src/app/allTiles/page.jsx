import Image from "next/image";
// import { HiSearch } from "react-icons/hi";

// import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";
import Navbar from "@/components/shared/Navbar/Navbar";
import TileCard from "@/components/TileCard";
import Footer from "@/components/shared/Footer/Footer";
import CategoryButton from "@/components/ui/CategoryButton";
import Link from "next/link";

export default async function AllTilesPage({ searchParams }) {
  const { category } = await searchParams;

  const tilesRes = await fetch(
    "https://tiles-gallery-server-1.onrender.com/tiles",
  );
  const allTiles = await tilesRes.json();

  // const categoryRes = await fetch(
  //   "https://tiles-gallery-server-1.onrender.com/category",
  // );
  // const categories = await categoryRes.json();

  const categories = [
    {
      id: "cat-0",
      name: "AllTiles",
    },
    {
      id: "cat-1",
      name: "Zellige",
      slug: "zellige",
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

  // const filtered = useMemo(() => {
  //   return tilesData.filter((tile) => {
  //     const q = search.toLowerCase();
  //     const matchSearch =
  //       tile.title.toLowerCase().includes(q) ||
  //       tile.material.toLowerCase().includes(q) ||
  //       tile.category.toLowerCase().includes(q);
  //     const matchCat =
  //       activeCategory === "All" || tile.category === activeCategory;
  //     return matchSearch && matchCat;
  //   });
  // }, [search, activeCategory]);

  const filterTiles = category
    ? allTiles.filter(
        (tiles) => tiles.category.toLowerCase() == category.toLowerCase(),
      )
    : allTiles;

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
          </div>
        </div>

        {/* Category pills */}
        <div
          className="sticky top-[60px] z-40"
          style={{ background: "#FAF7F2", borderBottom: "1px solid #E4DFD8" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-2 py-4 overflow-x-auto">
              {/* <Link
                className="text-sm font-medium whitespace-nowrap transition-colors flex justify-center items-center"
                href={`/allTiles`}
              >
                All Tiles
              </Link> */}
              {categories.map((cat) => (
                <CategoryButton key={cat.id} cat={cat}></CategoryButton>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl w-full mx-auto px-6 py-14">
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
            {/* <p className="text-sm mb-8" style={{ color: "#8C8880" }}>
              Showing {allTiles.length} tile{filtered.length !== 1 ? "s" : ""}
              {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
            </p> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterTiles.map((tile, i) => (
                <FadeUp key={tile.id} delay={i * 60}>
                  <TileCard tile={tile} />
                </FadeUp>
              ))}
            </div>
          </>
        )}
      </section>

      <Footer />
    </>
  );
}
