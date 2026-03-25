import { BriefcaseBusiness, BookOpenText, Sparkles } from "lucide-react";
import SectionDivider from "./ui/SectionDivider";
import DetailItem from "./ui/DetailItem";

function Card({ title, icon: Icon, items }) {
  return (
    <div className="glass-card p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-2xl bg-blush p-3 text-gold">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
      </div>

      <div className="grid gap-4">
        {items.map((item) => (
          <DetailItem key={item.label} label={item.label} value={item.value} />
        ))}
      </div>
    </div>
  );
}

export default function InfoGrid({ basicDetails, careerDetails }) {
  return (
    <section id="profile" className="py-16 sm:py-24">
      <div className="section-shell">
        <SectionDivider
          title="Profile Overview"
          subtitle="A graceful summary of personal, educational, and professional details."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Basic Details" icon={Sparkles} items={basicDetails} />
          <Card title="Education & Career" icon={BriefcaseBusiness} items={careerDetails} />
          <Card
            title="Personal Snapshot"
            icon={BookOpenText}
            items={[
              { label: "Nature", value: "Calm, caring, and responsible" },
              { label: "Lifestyle", value: "Balanced and family-oriented" },
              { label: "Interests", value: "Cooking, traveling, exploring" },
              { label: "Outlook", value: "Modern with rooted values" },
              { label: "Preferred Bond", value: "Respectful and understanding" },
              { label: "Looking For", value: "A positive life partner" }
            ]}
          />
        </div>
      </div>
    </section>
  );
}
