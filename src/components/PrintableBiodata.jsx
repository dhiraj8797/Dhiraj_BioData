import SectionDivider from "./ui/SectionDivider";

export default function PrintableBiodata({ data }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="section-shell">
        <SectionDivider
          title="Printable Biodata Summary"
          subtitle="A clean single-sheet style summary for easy sharing."
        />

        <div className="mx-auto max-w-4xl rounded-[30px] border border-rosegold/15 bg-white p-8 shadow-luxury sm:p-12">
          <div className="border-b border-rosegold/15 pb-6 text-center">
            <h3 className="text-3xl font-semibold text-ink">{data.hero.name}</h3>
            <p className="mt-2 text-base text-gold">{data.hero.title}</p>
            <p className="mt-3 text-sm text-muted">{data.contact.city}</p>
          </div>

          <div className="grid gap-8 pt-8 sm:grid-cols-2">
            <div>
              <h4 className="text-lg font-semibold text-ink">Personal Details</h4>
              <div className="mt-4 space-y-3 text-sm text-muted">
                {data.basicDetails.map((item) => (
                  <p key={item.label}>
                    <span className="font-medium text-ink">{item.label}:</span> {item.value}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-ink">Career Details</h4>
              <div className="mt-4 space-y-3 text-sm text-muted">
                {data.careerDetails.map((item) => (
                  <p key={item.label}>
                    <span className="font-medium text-ink">{item.label}:</span> {item.value}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-ink">Family Details</h4>
              <div className="mt-4 space-y-3 text-sm text-muted">
                {data.familyDetails.map((item) => (
                  <p key={item.label}>
                    <span className="font-medium text-ink">{item.label}:</span> {item.value}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-ink">Contact</h4>
              <div className="mt-4 space-y-3 text-sm text-muted">
                <p><span className="font-medium text-ink">Phone:</span> {data.contact.phone}</p>
                <p><span className="font-medium text-ink">Email:</span> {data.contact.email}</p>
                <p><span className="font-medium text-ink">Location:</span> {data.contact.city}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
