import Image from "next/image";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import Link from "next/link";

export const metadata = {
  title: "Projects | Tiles Gallery",
  description:
    "Explore our portfolio of innovative tile design projects across residential, commercial, and hospitality sectors.",
};

const projects = [
  {
    id: 1,
    title: "Maison Rivière — Paris",
    category: "Residential",
    tile: "Zellige Ocean",
    year: "2024",
    desc: "A full bathroom and kitchen suite clad in hand-cut zellige, bringing Moroccan warmth to a Haussmann-era apartment in the 7th arrondissement.",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=85",
    size: "large",
  },
  {
    id: 2,
    title: "The Foundry Hotel — Manchester",
    category: "Hospitality",
    tile: "Terracotta Brick",
    year: "2024",
    desc: "Industrial terracotta across lobby and restaurant floors of this converted mill building.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=85",
    size: "small",
  },
  {
    id: 3,
    title: "Côte Blanche Spa — Nice",
    category: "Wellness",
    tile: "Marble Blanc",
    year: "2023",
    desc: "Calacatta marble tiles throughout treatment rooms and pool surround.",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=85",
    size: "small",
  },
  {
    id: 4,
    title: "Notting Hill Townhouse — London",
    category: "Residential",
    tile: "Encaustic Heritage",
    year: "2023",
    desc: "Victorian-inspired encaustic floor tiles restored throughout a five-storey Georgian townhouse, pairing original features with contemporary living.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85",
    size: "large",
  },
  {
    id: 5,
    title: "Ristorante Verde — Milan",
    category: "Commercial",
    tile: "Cement Sage",
    year: "2023",
    desc: "Sage cement tiles create an earthy, botanical dining atmosphere.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85",
    size: "small",
  },
  {
    id: 6,
    title: "Coastal Villa — Algarve",
    category: "Residential",
    tile: "Natural Stone Pearl",
    year: "2022",
    desc: "Portuguese natural stone throughout indoor and outdoor living areas.",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=85",
    size: "small",
  },
];

const stats = [
  { value: "120+", label: "Projects Completed" },
  { value: "14", label: "Countries" },
  { value: "6", label: "Award Wins" },
  { value: "40+", label: "Design Partners" },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      {/* ── HERO — indoor tiled space ── */}
      <section className="relative pt-15">
        <div className="relative h-150 md:h-170">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=90"
            alt="Projects — tiled interior spaces"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(12,10,8,0.30) 0%, rgba(12,10,8,0.55) 50%, rgba(12,10,8,0.85) 100%)",
            }}
          />
          <div
            className="absolute left-12 top-1/4 bottom-16 w-px hidden md:block"
            style={{ background: "rgba(184,92,56,0.4)" }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-end pb-16 md:pb-20">
            <p
              className="text-xs font-semibold uppercase tracking-[4px] mb-4"
              style={{ color: "#B85C38" }}
            >
              Portfolio · 120+ Projects
            </p>
            <h1
              className="font-display font-light text-white leading-[1.05] mb-5"
              style={{
                fontSize: "clamp(44px,6vw,80px)",
                letterSpacing: "-2.5px",
                maxWidth: "700px",
              }}
            >
              Spaces we have
              <br />
              <em className="font-light" style={{ color: "#D4724D" }}>
                transformed.
              </em>
            </h1>
            <p
              className="text-sm font-light leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.55)", maxWidth: "460px" }}
            >
              From private residences to flagship hotels — every project begins
              with the right tile and ends with something unforgettable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/allTiles"
                className="inline-block px-7 py-3.5 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-80"
                style={{ background: "#B85C38" }}
              >
                Browse the Gallery
              </Link>
              <Link
                href="mailto:hello@tilegallery.com"
                className="inline-block px-7 py-3.5 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "#fff",
                }}
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section
        style={{
          background: "#0F0E0C",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-3 md:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="font-display font-light mb-1"
                style={{
                  fontSize: "clamp(32px,4vw,52px)",
                  color: "#D4724D",
                  letterSpacing: "-1px",
                }}
              >
                {s.value}
              </p>
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS GRID ── */}
      <section style={{ background: "#FAF7F2" }} className="py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-3 md:px-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3 text-center"
            style={{ color: "#B85C38" }}
          >
            Selected Work
          </p>
          <h2
            className="font-display font-light text-center mb-14"
            style={{
              fontSize: "clamp(28px,3.5vw,44px)",
              letterSpacing: "-1px",
              color: "#1A1714",
            }}
          >
            Recent Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.id}
                className={`group rounded-2xl overflow-hidden ${
                  p.size === "large" ? "lg:col-span-2" : ""
                }`}
                style={{ background: "#fff", border: "1px solid #E4DFD8" }}
              >
                <div
                  className={`relative overflow-hidden ${p.size === "large" ? "h-72" : "h-56"}`}
                >
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "rgba(12,10,8,0.3)" }}
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                      style={{
                        background: "rgba(184,92,56,0.92)",
                        color: "#fff",
                      }}
                    >
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-semibold"
                      style={{
                        background: "rgba(12,10,8,0.6)",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {p.year}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p
                    className="text-xs uppercase tracking-widest mb-2"
                    style={{ color: "#B85C38" }}
                  >
                    {p.tile}
                  </p>
                  <h3
                    className="font-display font-light mb-3"
                    style={{
                      fontSize: "clamp(18px,2vw,22px)",
                      letterSpacing: "-0.5px",
                      color: "#1A1714",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#6B6560" }}
                  >
                    {p.desc}
                  </p>
                  <div
                    className="w-8 h-0.5 mt-5"
                    style={{ background: "#E4DFD8" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS STRIP ── */}
      <section style={{ background: "#F2EDE6" }} className="py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-3 md:px-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3 text-center"
            style={{ color: "#B85C38" }}
          >
            How It Works
          </p>
          <h2
            className="font-display font-light text-center mb-14"
            style={{
              fontSize: "clamp(28px,3.5vw,44px)",
              letterSpacing: "-1px",
              color: "#1A1714",
            }}
          >
            From brief to beautiful
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Tell us about your space, style and timeline. We listen first.",
              },
              {
                step: "02",
                title: "Curation",
                desc: "We handpick tiles from our collection that suit your brief perfectly.",
              },
              {
                step: "03",
                title: "Sampling",
                desc: "Physical samples delivered to your door so you can see tiles in your light.",
              },
              {
                step: "04",
                title: "Installation",
                desc: "We connect you with trusted installers and oversee quality throughout.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
                style={{ background: "#fff", border: "1px solid #E4DFD8" }}
              >
                <p
                  className="font-display font-light text-5xl mb-5"
                  style={{ color: "#F2EDE6", letterSpacing: "-1px" }}
                >
                  {item.step}
                </p>
                <div
                  className="w-8 h-0.5 mb-4"
                  style={{ background: "#B85C38" }}
                />
                <h3
                  className="text-base font-semibold mb-3"
                  style={{ color: "#1A1714" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6B6560" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — full photo background ── */}
      <section className="relative py-32 text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1800&q=85"
          alt="Tiled interior"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(12,10,8,0.78)" }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#B85C38" }}
          >
            Work With Us
          </p>
          <h2
            className="font-display font-light text-white mb-4"
            style={{
              fontSize: "clamp(32px,4.5vw,56px)",
              letterSpacing: "-1.5px",
            }}
          >
            Have a project in mind?
          </h2>
          <p
            className="text-sm font-light mb-8"
            style={{
              color: "rgba(255,255,255,0.45)",
              maxWidth: "400px",
              margin: "0 auto 2rem",
            }}
          >
            Our design team works with architects, interior designers and
            private clients across Europe and beyond.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="mailto:hello@tilegallery.com"
              className="inline-block px-8 py-4 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-80"
              style={{ background: "#B85C38" }}
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className="inline-block px-8 py-4 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
              }}
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
