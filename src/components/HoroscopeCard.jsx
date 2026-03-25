import { Stars } from "lucide-react";
import SectionDivider from "./ui/SectionDivider";
import DetailItem from "./ui/DetailItem";

export default function HoroscopeCard({ horoscope }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="section-shell">
        <SectionDivider
          title="Religious & Horoscope Details"
          subtitle="Traditional details, presented with elegance."
        />

        <div className="glass-card p-8 sm:p-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl bg-blush p-3 text-gold">
              <Stars size={20} />
            </div>
            <h3 className="text-xl font-semibold text-ink">Traditional Details</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {horoscope.map((item) => (
              <DetailItem key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
