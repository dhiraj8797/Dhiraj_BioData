"use client";

import { motion } from "framer-motion";
import SectionDivider from "./ui/SectionDivider";
import DetailItem from "./ui/DetailItem";
import { GraduationCap, Briefcase } from "lucide-react";

export default function EducationCareer({ items }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="section-shell">
        <SectionDivider
          title="Education & Career"
          subtitle="Academic achievements and professional journey."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 sm:p-10"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-blush p-3 text-gold">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-semibold text-ink">Education</h3>
            </div>

            <div className="space-y-4">
              {items.slice(0, 2).map((item) => (
                <DetailItem key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 sm:p-10"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-blush p-3 text-gold">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-semibold text-ink">Career</h3>
            </div>

            <div className="space-y-4">
              {items.slice(2).map((item) => (
                <DetailItem key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
