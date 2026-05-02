import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import Navbar from "@/components/shared/Navbar/Navbar";
import FadeUp from "@/components/ui/FadeUp";
import TileCard from "@/components/TileCard";
import Footer from "@/components/shared/Footer/Footer";
import WhishlistToast from "@/components/ui/WhishlistToast";
import { Suspense } from "react";
import ToastHandler from "@/components/ToastHandler";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://tiles-gallery-server-1.onrender.com/tiles");
  const allTilesData = await res.json();
  const tile = allTilesData.find((singleTile) => singleTile.id == id);
  return {
    title: `${tile?.title} — TilesGallery`,
    description: tile.description,
  };
};

export default async function TileDetailPage({ params }) {
  const { id } = await params;
  const res = await fetch("https://tiles-gallery-server-1.onrender.com/tiles");
  const allTiles = await res.json();
  const tile = allTiles.find((singleTile) => singleTile.id == id);
  const similarTiles = allTiles.filter(
    (t) => t.category === tile.category && t.id != tile.id,
  );

  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <ToastHandler />
      </Suspense>

      <main className="pt-15 bg-[#F9F6F1] min-h-screen">
        <div className="max-w-7xl mx-auto px-3 md:px-6 py-6 md:py-12">
          {/* Navigation bar */}
          <div
            className="flex items-center gap-2 text-sm mb-6 md:mb-10"
            style={{ color: "#8C8880" }}
          >
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/allTiles" className="hover:underline">
              All Tiles
            </Link>
            <span>/</span>
            <span style={{ color: "#0F0E0C", fontWeight: 500 }}>
              {tile?.title}
            </span>
          </div>

          {/* Main tile content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* LEFT — image */}
            <div>
              <div className="relative rounded-2xl overflow-hidden h-160 ">
                <Image
                  src={tile?.image}
                  alt={tile?.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                {tile?.origin && (
                  <div
                    className=" absolute bottom-4 right-4 px-3 
                    bg-[#F9F6F1] text-[#3A3835]
                    py-1.5 rounded-xl text-xs font-semibold"
                  >
                    {tile?.origin}
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT — details */}
            <div className="lg:sticky lg:top-20">
              <FadeUp>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-[#B85C38]">
                  {tile?.category} · {tile?.material}
                </p>

                <h1 className="font-display font-light leading-tight mb-4 text-[clamp(38px,4vw,56px)] text-[#0F0E0C] tracking-tight">
                  {tile?.title}
                </h1>

                {tile?.creator && (
                  <p className="text-sm mb-4" style={{ color: "#8C8880" }}>
                    By {tile?.creator}
                  </p>
                )}

                {/* Stock */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 ${tile?.inStock ? "bg-[rgba(74,103,65,0.1)] text-[#4A6741]" : "bg-[rgba(140,136,128,0.1)] text-[#8C8880]"}`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: tile?.inStock ? "#4A6741" : "#8C8880",
                    }}
                  />
                  {tile?.inStock ? "In Stock — Ready to Ship" : "Out of Stock"}
                </div>

                {/* Price */}
                <div className="text-4xl font-semibold mb-5 text-[#0F0E0C]">
                  ${tile?.price?.toFixed(2)}
                  <span className="text-sm font-normal ml-1 text-[#8C8880]">
                    / per sqm
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-7 font-light text-[#8C8880]">
                  {tile?.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 p-5 rounded-2xl mb-7 bg-[#E4DFD8]">
                  {[
                    ["Material", tile?.material || "No Details Available"],
                    ["Dimensions", tile?.dimensions || "No Details Available"],
                    ["Finish", tile?.finish || "No Details Available"],
                    ["Origin", tile?.origin || "No Details Available"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p
                        className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                        style={{ color: "#8C8880" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "#0F0E0C" }}
                      >
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                {tile?.tags && (
                  <div className="flex flex-wrap gap-2 mb-7">
                    {tile?.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-[#E4DFD8] text-[#3A3835]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <WhishlistToast></WhishlistToast>

                <Link
                  href="/allTiles"
                  className="flex items-center gap-2 mt-6 text-sm transition-colors hover:underline"
                  style={{ color: "#8C8880" }}
                >
                  <HiArrowLeft size={14} /> Back to Gallery
                </Link>
              </FadeUp>
            </div>
          </div>

          {/* Related tiles */}
          <div className="mt-10 md:mt-20">
            <FadeUp>
              <h2
                className="font-display font-light leading-tight mb-10"
                style={{ fontSize: "clamp(28px,3vw,40px)", color: "#0F0E0C" }}
              >
                You might also <em style={{ color: "#B85C38" }}>like</em>{" "}
                similar tiles
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {similarTiles.map((t, i) => (
                <FadeUp key={t.id} delay={i * 80}>
                  <TileCard tile={t} />
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
