import { Mail, Phone, MapPin, Heart } from "lucide-react";

export default function FamilyFooter({ contact }) {
  return (
    <footer className="border-t border-rosegold/10 bg-white/50 py-10">
      <div className="section-shell">
        <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
          <div>
            <p className="text-lg font-semibold text-ink">For genuine family enquiries</p>
            <p className="mt-2 text-sm text-muted">
              Thank you for visiting this profile with respect and sincerity.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-muted">
            <a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 hover:text-gold">
              <Phone size={16} /> {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-gold">
              <Mail size={16} /> {contact.email}
            </a>
            <div className="inline-flex items-center gap-2">
              <MapPin size={16} /> {contact.city}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
          <Heart size={14} className="text-rosegold" />
          Crafted with warmth and grace
        </div>
      </div>
    </footer>
  );
}
