import { Mail, Phone, MapPin, FileText } from "lucide-react";
import SectionDivider from "./ui/SectionDivider";

export default function ContactCard({ contact, pdf }) {
  return (
    <section id="contact" className="pb-16 pt-16 sm:pb-24 sm:pt-24">
      <div className="section-shell">
        <SectionDivider
          title="Contact Details"
          subtitle="For genuine family enquiries and further communication."
        />

        <div className="glass-card overflow-hidden p-8 sm:p-10">
          <div className="grid gap-6 lg:gap-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/75 p-6 sm:col-span-2">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-r from-gold to-rosegold p-3 text-white shadow-lg">
                  <Phone size={20} />
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted mb-4 font-semibold">Family Contact Numbers</p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blush/30 to-transparent hover:from-blush/50 transition-colors duration-300 group">
                    <div className="w-2 h-2 rounded-full bg-gold opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <div>
                      <p className="text-xs text-muted font-medium">Dhiraj</p>
                      <p className="font-semibold text-ink">{contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-rosegold/20 to-transparent hover:from-rosegold/40 transition-colors duration-300 group">
                    <div className="w-2 h-2 rounded-full bg-rosegold opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <div>
                      <p className="text-xs text-muted font-medium">Father</p>
                      <p className="font-semibold text-ink">{contact.fatherPhone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gold/20 to-transparent hover:from-gold/40 transition-colors duration-300 group">
                    <div className="w-2 h-2 rounded-full bg-gold opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <div>
                      <p className="text-xs text-muted font-medium">Mother</p>
                      <p className="font-semibold text-ink">{contact.motherPhone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-rosegold/20 to-transparent hover:from-rosegold/40 transition-colors duration-300 group">
                    <div className="w-2 h-2 rounded-full bg-rosegold opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <div>
                      <p className="text-xs text-muted font-medium">Sister</p>
                      <p className="font-semibold text-ink">{contact.sisterPhone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gold/20 to-transparent hover:from-gold/40 transition-colors duration-300 group">
                    <div className="w-2 h-2 rounded-full bg-gold opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    <div>
                      <p className="text-xs text-muted font-medium">Brother</p>
                      <p className="font-semibold text-ink">{contact.brotherPhone}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white/75 p-5">
                <div className="mb-3 inline-flex rounded-xl bg-blush p-3 text-gold">
                  <Mail size={18} />
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">Email</p>
                <p className="mt-2 break-all font-medium text-ink">{contact.email}</p>
              </div>

              <a 
                href="https://maps.app.goo.gl/fUgZNhPLxvXzNzSE6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-2xl bg-white/75 p-5 block hover:bg-white/90 transition-colors duration-300 group"
              >
                <div className="mb-3 inline-flex rounded-xl bg-blush p-3 text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                  <MapPin size={18} />
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">Location</p>
                <p className="mt-2 font-medium text-ink underline decoration-2 underline-offset-4 decoration-rosegold/30 group-hover:decoration-gold/50">{contact.city}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
