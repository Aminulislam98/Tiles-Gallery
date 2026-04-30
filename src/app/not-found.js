import Navbar from "@/components/shared/Navbar/Navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-[60px] min-h-screen bg-bg not-found-bg flex items-center justify-center px-8">
        <div className="text-center max-w-[500px]">
          <div className="font-display text-[clamp(100px,20vw,160px)] font-light leading-none text-stone2 mb-4">
            404
          </div>
          <h1 className="font-display text-[clamp(28px,4vw,40px)] font-light text-ink tracking-[-0.8px] mb-4">
            Page not <em className="text-terra italic">found</em>
          </h1>
          <p className="text-[15px] text-muted leading-[1.75] mb-9 font-light">
            The tile you&apos;re looking for seems to have wandered off.
            Let&apos;s get you back to the gallery.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="/"
              className="px-7 py-3.5 bg-ink text-white text-[14px] font-medium rounded-xl hover:bg-terra transition-colors"
            >
              Go Home
            </Link>
            <Link
              href="/all-tiles"
              className="px-7 py-3.5 border border-stone2 text-ink text-[14px] font-medium rounded-xl hover:border-terra hover:text-terra transition-colors"
            >
              Browse Tiles
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
