export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-rosegold/20 bg-white/80 px-4 py-1.5 text-xs font-medium tracking-wide text-gold shadow-sm">
      {children}
    </span>
  );
}
