import Link from "next/link";

// import Footer from "@/components/layout/Footer";

// import FadeUp from "@/components/ui/FadeUp";
// import { tilesData } from "@/data/tiles";
import Navbar from "@/components/shared/Navbar/Navbar";
import Marquee from "react-fast-marquee";
import FadeUp from "@/components/ui/FadeUp";
import Image from "next/image";
import TileCard from "@/components/TileCard";
import Footer from "@/components/shared/Footer/Footer";

// const featured = tilesData.slice(0, 4);

const marqueeItems = [
  "New Arrivals: Zellige Ocean Blue",
  "Weekly Feature: Modern Geometric Patterns",
  "Join the Community of 1,800+ Designers",
  "Now In Stock: Carrara Marble Series",
  "New: Terracotta Heritage Collection",
];

const stats = [
  { num: "2,000+", label: "Premium Tiles" },
  { num: "48+", label: "Countries Served" },
  { num: "12,000", label: "Happy Customers" },
  { num: "99%", label: "Satisfaction Rate" },
];

export default async function HomePage() {
  const res = await fetch("https://tiles-gallery-server-1.onrender.com/tiles");
  const tilesData = await res.json();
  console.log(tilesData.length);
  const featuredTiles = tilesData.slice(0, 4);
  console.log(featuredTiles);
  return (
    <>
      <Navbar dark />

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-170 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1800&q=85"
          alt="Premium tile interior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15,14,12,0.85) 0%, rgba(15,14,12,0.5) 60%, rgba(15,14,12,0.1) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(15,14,12,0.4) 0%, transparent 50%)",
          }}
        />

        {/* Text */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#B85C38" }}
              >
                Premium Tile Gallery · Est. 2024
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-display font-light text-white leading-tight mb-6"
              style={{
                fontSize: "clamp(48px,7vw,84px)",
                letterSpacing: "-1.5px",
              }}
            >
              Discover Your
              <br />
              <em className="font-light" style={{ color: "#D4724D" }}>
                Perfect Surface
              </em>
              <br />
              Story
            </h1>

            <p
              className="text-base leading-relaxed mb-8 font-light"
              style={{ color: "rgba(255,255,255,0.6)", maxWidth: "420px" }}
            >
              Curated artisan tiles from master craftspeople worldwide — from
              hand-cut Zellige to Italian porcelain.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/allTiles"
                className="px-8 py-3.5 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ background: "#B85C38" }}
              >
                Browse Gallery →
              </Link>
              <Link
                href="/allTiles"
                className="px-7 py-3.5 rounded-xl text-sm font-medium text-white transition-colors hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.25)" }}
              >
                View Lookbook
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
      </section>

      {/* ── MARQUEE ── */}
      <div className="overflow-hidden py-3 bg-[#0F0E0C]">
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover
          className="flex items-center gap-4"
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center shrink-0">
              <span
                className="px-10 text-xs font-medium tracking-wide"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
              </span>
              <span
                className="w-1 h-1 rounded-full shrink-0"
                style={{ background: "#B85C38" }}
              />
            </span>
          ))}
        </Marquee>
      </div>

      {/* ── FEATURED TILES ── */}
      <section className="py-24" style={{ background: "#F9F6F1" }}>
        <div className="max-w-7xl mx-auto px-4">
          <FadeUp>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "#B85C38" }}
                >
                  Featured Collection
                </p>
                <h2
                  className="font-display font-light leading-tight"
                  style={{
                    fontSize: "clamp(36px,4vw,52px)",
                    color: "#0F0E0C",
                    letterSpacing: "-1px",
                  }}
                >
                  Top <em style={{ color: "#B85C38" }}>Picks</em>
                </h2>
              </div>
              <Link
                href="/allTiles"
                className="text-sm font-medium hidden md:block"
                style={{ color: "#B85C38" }}
              >
                View All →
              </Link>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredTiles.map((tile, i) => (
              <FadeUp key={tile.id} delay={i * 80}>
                <TileCard tile={tile} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL BLEED BANNER ── */}
      <section className="relative h-[500px] overflow-hidden flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1800&q=85"
          alt="Interior"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(15,14,12,0.72)" }}
        />
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <FadeUp>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#D4724D" }}
            >
              Our Philosophy
            </p>
            <h2
              className="font-display font-light text-white leading-tight mb-5"
              style={{
                fontSize: "clamp(36px,5vw,60px)",
                letterSpacing: "-1px",
              }}
            >
              Every space has a{" "}
              <em style={{ color: "#D4724D" }}>surface waiting</em> to be told
            </h2>
            <p
              className="text-sm leading-relaxed mb-8 font-light"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              From first concept to final installation, we guide you toward
              tiles that define a room.
            </p>
            <Link
              href="/allTiles"
              className="inline-block px-9 py-3.5 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: "#B85C38" }}
            >
              Explore the Gallery
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── STATS ── */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4"
        style={{
          background: "#F9F6F1",
          borderTop: "1px solid #E4DFD8",
          borderBottom: "1px solid #E4DFD8",
        }}
      >
        {stats.map(({ num, label }, i) => (
          <FadeUp key={i} delay={i * 60}>
            <div
              className="text-center py-12 px-6"
              style={{ borderRight: i < 3 ? "1px solid #E4DFD8" : "none" }}
            >
              <div
                className="font-display font-light leading-none mb-2"
                style={{ fontSize: "clamp(40px,4vw,56px)", color: "#0F0E0C" }}
              >
                {num}
              </div>
              <p className="text-sm" style={{ color: "#8C8880" }}>
                {label}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* ── CTA SIGN UP ── */}
      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1800&q=85"
          alt="Tiles"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(15,14,12,0.80)" }}
        />
        <div className="relative z-10 max-w-xl mx-auto text-center px-4 py-24">
          <FadeUp>
            <h2
              className="font-display font-light text-white leading-tight mb-4"
              style={{
                fontSize: "clamp(32px,5vw,56px)",
                letterSpacing: "-1px",
              }}
            >
              Ready to find your{" "}
              <em style={{ color: "#D4724D" }}>perfect tile?</em>
            </h2>
            <p
              className="text-sm leading-relaxed mb-8 font-light"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Create a free account to save favourites and get personalised
              recommendations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/register"
                className="px-8 py-3.5 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ background: "#B85C38" }}
              >
                Start for Free
              </Link>
              <Link
                href="/allTiles"
                className="px-7 py-3.5 rounded-xl text-sm font-medium text-white transition-colors hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.25)" }}
              >
                Browse Gallery
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
