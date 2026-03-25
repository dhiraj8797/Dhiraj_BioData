export default function SectionDivider({ title, subtitle }) {
  return (
    <div className="mb-12 text-center space-y-4">
      <div className="inline-flex items-center gap-3">
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gold"></div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">{title}</h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-transparent"></div>
      </div>
      
      {subtitle && (
        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-rosegold/50 to-transparent"></div>
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gold to-rosegold"></div>
        <div className="h-px w-16 bg-gradient-to-r from-rosegold/50 to-transparent"></div>
      </div>
    </div>
  );
}
