export default function DetailItem({ label, value }) {
  return (
    <div className="group rounded-2xl border border-rosegold/20 bg-white/80 backdrop-blur-sm px-5 py-4 transition-all duration-300 hover:border-rosegold/40 hover:bg-white hover:shadow-lg hover:scale-[1.02]">
      <p className="text-xs uppercase tracking-[0.18em] text-muted font-medium">{label}</p>
      <p className="mt-2 text-sm font-semibold text-ink sm:text-base leading-tight">{value}</p>
      <div className="mt-2 h-0.5 w-0 bg-gradient-to-r from-gold to-rosegold transition-all duration-300 group-hover:w-full"></div>
    </div>
  );
}
