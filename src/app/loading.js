export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F6F1]">
      <div className="text-center">
        {/* Logo mark — 2x2 tile grid */}
        <div className="grid grid-cols-2 gap-1 w-10 h-10 mx-auto mb-4 animate-pulse">
          <span
            className="rounded-sm block"
            style={{ background: "#B85C38" }}
          />
          <span
            className="rounded-sm block"
            style={{ background: "#C09A5B" }}
          />
          <span
            className="rounded-sm block"
            style={{ background: "#C09A5B" }}
          />
          <span
            className="rounded-sm block"
            style={{ background: "#B85C38" }}
          />
        </div>
        <p
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "#8C8880" }}
        >
          Loading…
        </p>
      </div>
    </div>
  );
}
