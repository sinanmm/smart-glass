export default function Loading() {
  return (
    <div className="py-32 flex flex-col items-center justify-center min-h-[60vh] bg-white">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-slate-200" />
        <div className="absolute inset-0 rounded-full border-2 border-[#286497] border-t-transparent animate-spin" />
      </div>
      <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
        Loading SG Smart Glass...
      </span>
    </div>
  );
}
