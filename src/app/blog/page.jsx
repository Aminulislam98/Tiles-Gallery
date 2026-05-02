import Image from "next/image";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import Link from "next/link";

const featured = {
  title:
    "The Zellige Revival: Why Moroccan Tiles Are Dominating Interior Design in 2025",
  category: "Trends",
  author: "Isabelle Fontaine",
  date: "28 April 2025",
  readTime: "7 min read",
  img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=85",
};

const posts = [
  {
    id: 1,
    title: "How to Choose the Right Grout Colour for Your Tiles",
    category: "How-To",
    author: "Priya Menon",
    date: "14 Apr 2025",
    readTime: "5 min",
    img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=600&q=80",
  },
  {
    id: 2,
    title: "Terracotta Through the Ages: From Ancient Rome to Modern Kitchens",
    category: "History",
    author: "Rami Al-Haddad",
    date: "2 Apr 2025",
    readTime: "8 min",
    img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&q=80",
  },
  {
    id: 3,
    title: "Outdoor Tiles: What Works and What Doesn't",
    category: "Guide",
    author: "Thomas Breuer",
    date: "21 Mar 2025",
    readTime: "6 min",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
  },
  {
    id: 4,
    title: "The Difference Between Ceramic and Porcelain — And Why It Matters",
    category: "Education",
    author: "Priya Menon",
    date: "10 Mar 2025",
    readTime: "4 min",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
  },
  {
    id: 5,
    title: "Inside Our Morocco Sourcing Trip: Meeting the Makers",
    category: "Behind the Scenes",
    author: "Isabelle Fontaine",
    date: "26 Feb 2025",
    readTime: "10 min",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
  },
  {
    id: 6,
    title: "Small Bathroom, Big Impact: Tile Layouts That Work",
    category: "Design Tips",
    author: "Priya Menon",
    date: "12 Feb 2025",
    readTime: "5 min",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
  },
];

export const metadata = {
  title: "Blog | Tiles Gallery",
  description:
    "Read the Tiles Gallery Journal for design inspiration, tile trends, and behind-the-scenes stories from our artisan partners. Discover how to choose the perfect tile for your space and stay inspired with our monthly newsletter.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />

      {/* ── HERO — featured post as full bleed ── */}
      <section className="relative pt-15">
        <div className="relative h-[600px] md:h-[680px]">
          <Image
            src={featured.img}
            alt={featured.title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(12,10,8,0.25) 0%, rgba(12,10,8,0.55) 50%, rgba(12,10,8,0.88) 100%)",
            }}
          />
          <div
            className="absolute left-12 top-1/4 bottom-16 w-px hidden md:block"
            style={{ background: "rgba(184,92,56,0.4)" }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-end pb-16 md:pb-20">
            <span
              className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-4 w-fit"
              style={{ background: "rgba(184,92,56,0.92)", color: "#fff" }}
            >
              {featured.category} · Featured
            </span>
            <h1
              className="font-display font-light text-white leading-[1.05] mb-5"
              style={{
                fontSize: "clamp(32px,4.5vw,62px)",
                letterSpacing: "-2px",
                maxWidth: "780px",
              }}
            >
              {featured.title}
            </h1>
            <div
              className="flex items-center gap-4 text-xs"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              <span>{featured.author}</span>
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.3)" }}
              />
              <span>{featured.date}</span>
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.3)" }}
              />
              <span>{featured.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── POSTS GRID ── */}
      <section style={{ background: "#FAF7F2" }} className="py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-3 md:px-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3 text-center"
            style={{ color: "#B85C38" }}
          >
            The Journal
          </p>
          <h2
            className="font-display font-light text-center mb-14"
            style={{
              fontSize: "clamp(28px,3.5vw,44px)",
              letterSpacing: "-1px",
              color: "#1A1714",
            }}
          >
            Stories from the studio
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                style={{ background: "#fff", border: "1px solid #E4DFD8" }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "rgba(12,10,8,0.25)" }}
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                      style={{
                        background: "rgba(184,92,56,0.92)",
                        color: "#fff",
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2
                    className="font-display font-light mb-4 group-hover:text-[#B85C38] transition-colors duration-200"
                    style={{
                      fontSize: "clamp(17px,1.8vw,20px)",
                      letterSpacing: "-0.5px",
                      color: "#1A1714",
                      lineHeight: "1.3",
                    }}
                  >
                    {post.title}
                  </h2>
                  <div
                    className="w-8 h-0.5 mb-4"
                    style={{ background: "#E4DFD8" }}
                  />
                  <div
                    className="flex items-center justify-between text-xs"
                    style={{ color: "#9E9891" }}
                  >
                    <span>{post.author}</span>
                    <div className="flex items-center gap-2">
                      <span>{post.readTime}</span>
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{ background: "#C4BEB6" }}
                      />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER — dark section ── */}
      <section style={{ background: "#0F0E0C" }} className="py-10 md:py-24">
        <div className="max-w-7xl mx-auto px-3 md:px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#B85C38" }}
            >
              Stay Inspired
            </p>
            <h2
              className="font-display font-light text-white mb-4"
              style={{
                fontSize: "clamp(28px,3.5vw,48px)",
                letterSpacing: "-1.5px",
              }}
            >
              Join our
              <em className="font-light" style={{ color: "#D4724D" }}>
                {" "}
                journal
              </em>
            </h2>
            <p
              className="text-sm font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)", maxWidth: "380px" }}
            >
              Tile trends, design guides and behind-the-scenes stories from our
              artisan partners — delivered once a month, never spammed.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-5 py-4 rounded-xl text-sm outline-none text-white"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            />
            <Link
              href="mailto:journal@tilegallery.com"
              className="inline-block w-full text-center px-5 py-4 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-80"
              style={{ background: "#B85C38" }}
            >
              Subscribe to the Journal
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA — full photo background ── */}
      <section className="relative py-32 text-center overflow-hidden">
        <Image
          src="https://www.inframarketstores.com/assets/images/tiles/banner-tiles-4.jpg"
          alt="Indoor tile floor"
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
            Explore our full tile collection
          </h2>
          <p
            className="text-sm font-light mb-8"
            style={{
              color: "rgba(255,255,255,0.45)",
              maxWidth: "380px",
              margin: "0 auto 2rem",
            }}
          >
            Browse 1,200+ artisan tiles and find the perfect surface for your
            space.
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
              href="/project"
              className="inline-block px-8 py-4 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
              }}
            >
              See Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
