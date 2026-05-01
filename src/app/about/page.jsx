import Image from "next/image";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import Link from "next/link";

const stats = [
  { value: "1200+", label: "Tile Varieties" },
  { value: "18", label: "Years of Craft" },
  { value: "40+", label: "Countries Shipped" },
  { value: "98%", label: "Client Satisfaction" },
];

const team = [
  {
    name: "Isabelle Fontaine",
    role: "Founder & Creative Director",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80",
  },
  {
    name: "Rami Al-Haddad",
    role: "Head of Sourcing",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Priya Menon",
    role: "Lead Designer",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Thomas Breuer",
    role: "Operations Director",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
];

const values = [
  {
    title: "Artisan Heritage",
    desc: "Every tile we source carries centuries of craft tradition — from Moroccan zellige to Italian terracotta.",
  },
  {
    title: "Responsible Sourcing",
    desc: "We work directly with family-run studios and cooperatives to ensure fair wages and ethical production.",
  },
  {
    title: "Timeless Design",
    desc: "We believe in materials that age beautifully — surfaces that develop character rather than showing wear.",
  },
  {
    title: "Expert Guidance",
    desc: "Our design consultants work with you from concept to installation, ensuring a flawless result.",
  },
];

const milestones = [
  {
    year: "2006",
    event: "Founded in London's East End as a small importing studio",
  },
  {
    year: "2010",
    event: "First major hospitality contract — The Rivington Hotel, London",
  },
  { year: "2014", event: "Opened our Morocco sourcing office in Fès medina" },
  {
    year: "2018",
    event: "Launched online gallery, shipping to 40+ countries worldwide",
  },
  {
    year: "2022",
    event: "Named best tile supplier by Architectural Digest UK",
  },
  { year: "2025", event: "1,200+ tile varieties across 8 artisan categories" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* ── HERO — indoor tile floor ── */}
      <section className="relative pt-[60px]">
        <div className="relative h-[600px] md:h-[680px]">
          <Image
            src="https://www.corktileandwoodflooring.com/media/responsivebannerslider/responsivebannerslider/banner_2_1.jpg"
            alt="Indoor tile floor — premium artisan collection"
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
          {/* Decorative vertical line */}
          <div
            className="absolute left-12 top-1/4 bottom-16 w-px hidden md:block"
            style={{ background: "rgba(184,92,56,0.4)" }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-end pb-16 md:pb-20">
            <p
              className="text-xs font-semibold uppercase tracking-[4px] mb-4"
              style={{ color: "#B85C38" }}
            >
              Our Story · Est. 2006
            </p>
            <h1
              className="font-display font-light text-white leading-[1.05] mb-5"
              style={{
                fontSize: "clamp(44px,6vw,80px)",
                letterSpacing: "-2.5px",
                maxWidth: "700px",
              }}
            >
              Tiles are not just
              <br />
              <em className="font-light" style={{ color: "#D4724D" }}>
                surfaces.
              </em>{" "}
              They are stories.
            </h1>
            <p
              className="text-sm font-light leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.55)", maxWidth: "460px" }}
            >
              For nearly two decades we have sourced the world's finest handmade
              tiles — connecting artisan makers with the spaces that deserve
              them.
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
                href="/projects"
                className="inline-block px-7 py-3.5 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "#fff",
                }}
              >
                See Our Projects
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
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
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

      {/* ── MISSION — split with floating photo cards ── */}
      <section style={{ background: "#FAF7F2" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#B85C38" }}
            >
              Who We Are
            </p>
            <h2
              className="font-display font-light leading-tight mb-6"
              style={{
                fontSize: "clamp(32px,4vw,52px)",
                letterSpacing: "-1.5px",
                color: "#1A1714",
              }}
            >
              A gallery built on obsession with craft
            </h2>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#6B6560" }}
            >
              Founded in 2006, The Tile Gallery began as a small importing
              studio in London's East End. Our founder Isabelle Fontaine spent
              years travelling through Morocco, Portugal, Italy and Mexico —
              documenting disappearing tile-making traditions and building
              relationships with the artisans keeping them alive.
            </p>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "#6B6560" }}
            >
              Today we are one of the UK's most respected sources for premium
              handmade tiles — trusted by interior designers, architects and
              discerning homeowners who refuse to compromise on quality or
              authenticity.
            </p>
            <blockquote
              className="pl-5 py-1"
              style={{ borderLeft: "3px solid #B85C38" }}
            >
              <p
                className="font-display font-light italic"
                style={{
                  fontSize: "clamp(18px,2vw,24px)",
                  color: "#1A1714",
                  letterSpacing: "-0.5px",
                }}
              >
                "A tile is not decoration. It is architecture you can touch."
              </p>
              <cite
                className="block text-xs uppercase tracking-widest mt-2 not-italic"
                style={{ color: "#B85C38" }}
              >
                — Isabelle Fontaine, Founder
              </cite>
            </blockquote>
          </div>

          {/* Layered photo composition */}
          <div className="relative h-[420px] mt-10 md:mt-0">
            <div className="relative h-full rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1615529328331-f8917597711f?w=900&q=85"
                alt="Artisan tile craft"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            {/* Floating small photo bottom-left */}
            <div
              className="absolute -bottom-6 -left-6 w-44 h-44 rounded-2xl overflow-hidden"
              style={{ border: "4px solid #FAF7F2" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=400&q=85"
                alt="Zellige detail"
                fill
                className="object-cover"
                sizes="176px"
              />
            </div>
            {/* Circular badge top-right */}
            <div
              className="absolute -top-5 -right-5 w-24 h-24 rounded-full flex flex-col items-center justify-center text-center"
              style={{ background: "#B85C38" }}
            >
              <p className="font-display text-white text-2xl font-light leading-none">
                18
              </p>
              <p className="text-white text-[9px] uppercase tracking-wider leading-tight mt-1">
                Years
                <br />
                of Craft
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENTO GRID — real indoor spaces ── */}
      <section style={{ background: "#F2EDE6" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3 text-center"
            style={{ color: "#B85C38" }}
          >
            Our Work in Spaces
          </p>
          <h2
            className="font-display font-light text-center mb-12"
            style={{
              fontSize: "clamp(28px,3.5vw,44px)",
              letterSpacing: "-1px",
              color: "#1A1714",
            }}
          >
            Floors. Walls. Kitchens. Baths.
          </h2>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            style={{ height: "520px" }}
          >
            {/* Large left — indoor floor */}
            <div className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85"
                alt="Indoor tile floor"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="50vw"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "rgba(12,10,8,0.3)" }}
              />
              <div className="absolute bottom-5 left-5">
                <span
                  className="px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                  style={{ background: "rgba(184,92,56,0.92)", color: "#fff" }}
                >
                  Indoor Floors
                </span>
              </div>
            </div>
            {/* Top right — kitchen */}
            <div className="relative col-span-2 rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Kitchen tiles"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute bottom-4 left-4">
                <span
                  className="px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                  style={{ background: "rgba(184,92,56,0.92)", color: "#fff" }}
                >
                  Kitchen Splashbacks
                </span>
              </div>
            </div>
            {/* Bottom right — bathroom */}
            <div className="relative rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80"
                alt="Bathroom tiles"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="12vw"
              />
              <div className="absolute bottom-3 left-3">
                <span
                  className="px-2.5 py-1 rounded-full text-[9px] font-semibold uppercase tracking-wider"
                  style={{ background: "rgba(184,92,56,0.92)", color: "#fff" }}
                >
                  Bathrooms
                </span>
              </div>
            </div>
            {/* Bottom right — outdoor */}
            <div className="relative rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80"
                alt="Outdoor tiles"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="12vw"
              />
              <div className="absolute bottom-3 left-3">
                <span
                  className="px-2.5 py-1 rounded-full text-[9px] font-semibold uppercase tracking-wider"
                  style={{ background: "rgba(184,92,56,0.92)", color: "#fff" }}
                >
                  Outdoor
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ background: "#FAF7F2" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3 text-center"
            style={{ color: "#B85C38" }}
          >
            What Drives Us
          </p>
          <h2
            className="font-display font-light text-center mb-14"
            style={{
              fontSize: "clamp(28px,3.5vw,44px)",
              letterSpacing: "-1px",
              color: "#1A1714",
            }}
          >
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
                style={{ background: "#fff", border: "1px solid #E4DFD8" }}
              >
                <p
                  className="font-display font-light text-5xl mb-5"
                  style={{ color: "#F2EDE6", letterSpacing: "-1px" }}
                >
                  0{i + 1}
                </p>
                <div
                  className="w-8 h-0.5 mb-4"
                  style={{ background: "#B85C38" }}
                />
                <h3
                  className="text-base font-semibold mb-3"
                  style={{ color: "#1A1714" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6B6560" }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ background: "#0F0E0C" }} className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3 text-center"
            style={{ color: "#B85C38" }}
          >
            Our Journey
          </p>
          <h2
            className="font-display font-light text-center text-white mb-16"
            style={{
              fontSize: "clamp(28px,3.5vw,44px)",
              letterSpacing: "-1px",
            }}
          >
            18 Years of Craft
          </h2>
          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="flex gap-6 items-start pb-10"
                style={{
                  borderLeft: "1px solid rgba(255,255,255,0.07)",
                  paddingLeft: "24px",
                  position: "relative",
                }}
              >
                {/* Dot on the line */}
                <div
                  className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: "#B85C38" }}
                />
                <p
                  className="font-display font-light flex-shrink-0 w-16"
                  style={{
                    fontSize: "clamp(22px,2.5vw,30px)",
                    color: "#D4724D",
                    letterSpacing: "-1px",
                  }}
                >
                  {m.year}
                </p>
                <p
                  className="text-sm leading-relaxed pt-1.5"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {m.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ background: "#FAF7F2" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3 text-center"
            style={{ color: "#B85C38" }}
          >
            The People
          </p>
          <h2
            className="font-display font-light text-center mb-14"
            style={{
              fontSize: "clamp(28px,3.5vw,44px)",
              letterSpacing: "-1px",
              color: "#1A1714",
            }}
          >
            Meet the Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="25vw"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(184,92,56,0.15)" }}
                  />
                  {/* Slide-up name overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 py-4 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    style={{ background: "rgba(12,10,8,0.78)" }}
                  >
                    <p className="text-white text-sm font-semibold">
                      {member.name}
                    </p>
                    <p
                      className="text-[10px] uppercase tracking-wider mt-0.5"
                      style={{ color: "#D4724D" }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
                <h3
                  className="text-sm font-semibold mb-1"
                  style={{ color: "#1A1714" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs uppercase tracking-wider"
                  style={{ color: "#B85C38" }}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — full photo background ── */}
      <section className="relative py-32 text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1800&q=85"
          alt="Beautiful tiled interior"
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
            Ready to Begin?
          </p>
          <h2
            className="font-display font-light text-white mb-4"
            style={{
              fontSize: "clamp(32px,4.5vw,56px)",
              letterSpacing: "-1.5px",
            }}
          >
            Let's find the perfect tile for your space
          </h2>
          <p
            className="text-sm font-light mb-8"
            style={{
              color: "rgba(255,255,255,0.45)",
              maxWidth: "400px",
              margin: "0 auto 2rem",
            }}
          >
            Browse 1,200+ artisan tiles or speak to one of our design
            consultants.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/allTiles"
              className="inline-block px-8 py-4 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-80"
              style={{ background: "#B85C38" }}
            >
              Browse the Gallery
            </Link>
            <Link
              href="mailto:hello@tilegallery.com"
              className="inline-block px-8 py-4 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
              }}
            >
              Talk to a Designer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
