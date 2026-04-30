export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="text-center">
        <div className="grid grid-cols-2 gap-1 w-10 h-10 mx-auto mb-4 animate-pulse">
          <span className="rounded-[3px] bg-terra block" />
          <span className="rounded-[3px] bg-gold block" />
          <span className="rounded-[3px] bg-gold block" />
          <span className="rounded-[3px] bg-terra block" />
        </div>
        <p className="text-[13px] text-muted tracking-[1px] uppercase font-medium">
          Loading…
        </p>
      </div>
    </div>
  );
}
