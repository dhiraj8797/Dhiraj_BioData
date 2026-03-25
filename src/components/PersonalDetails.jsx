import { HeartHandshake } from "lucide-react";
import SectionDivider from "./ui/SectionDivider";
import DetailItem from "./ui/DetailItem";

export default function PersonalDetails({ items }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="section-shell">
        <SectionDivider
          title="Personal & Religious Details"
          subtitle="Traditional details presented in a modern and elegant way."
        />

        <div className="glass-card p-8 sm:p-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl bg-blush p-3 text-gold">
              <HeartHandshake size={20} />
            </div>
            <h3 className="text-xl font-semibold text-ink">Family & Values</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <DetailItem key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
