import { Home, Users } from "lucide-react";
import SectionDivider from "./ui/SectionDivider";
import DetailItem from "./ui/DetailItem";

export default function FamilyDetails({ familyDetails }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="section-shell">
        <SectionDivider
          title="Family Details"
          subtitle="Grounded values, warmth, and a supportive family background."
        />

        <div className="glass-card overflow-hidden">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-gradient-to-br from-blush to-ivory p-8 sm:p-10">
              <div className="inline-flex rounded-2xl bg-white/80 p-3 text-gold">
                <Home size={22} />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-ink">Family Background</h3>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                Coming from a respectable and well-balanced family, with emphasis on values, togetherness, and mutual support.
              </p>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-rosegold/15 bg-white/80 px-4 py-2 text-sm text-gold">
                <Users size={16} />
                Family-oriented and respectful
              </div>
            </div>

            <div className="grid gap-4 p-8 sm:grid-cols-2 sm:p-10">
              {familyDetails.map((item) => (
                <DetailItem key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
