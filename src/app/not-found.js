import Link from "next/link";
export const metadata = {
  title: "Not Found | Tiles Gallery",
  description:
    "The page you are looking for does not exist. Explore our collection of premium artisan tiles or return to the homepage to find your perfect surface.",
};

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: "#F9F6F1" }}
    >
      <div className="text-center max-w-md">
        {/* Big 404 */}
        <div
          className="font-display font-light leading-none mb-6"
          style={{
            fontSize: "clamp(100px,20vw,160px)",
            color: "#E4DFD8",
          }}
        >
          404
        </div>

        <h1
          className="font-display font-light leading-tight mb-4"
          style={{ fontSize: "clamp(28px,4vw,40px)", color: "#0F0E0C" }}
        >
          Page not <em className="text-[#B85C38]">found</em>
        </h1>

        <p
          className="text-sm leading-relaxed mb-8 font-light"
          style={{ color: "#8C8880" }}
        >
          The tile you&apos;re looking for seems to have wandered off.
          Let&apos;s get you back to the gallery.
        </p>

        <div className="flex gap-3 justify-center">
          <Link
            href="/"
            className="px-7 py-3 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-80"
            style={{ background: "#0F0E0C" }}
          >
            Go Home
          </Link>
          <Link
            href="/allTiles"
            className="px-7 py-3 rounded-xl text-sm font-medium transition-colors hover:opacity-70"
            style={{
              border: "1px solid #CFC9C0",
              color: "#0F0E0C",
            }}
          >
            Browse Tiles
          </Link>
        </div>
      </div>
    </div>
  );
}
