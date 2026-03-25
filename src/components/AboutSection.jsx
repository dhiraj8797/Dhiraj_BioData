"use client";

import { motion } from "framer-motion";
import SectionDivider from "./ui/SectionDivider";

function TextCard({ title, content, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass-card h-full p-8 sm:p-10 card-hover group"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gold to-rosegold flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>
        <h3 className="text-2xl font-bold text-gradient">{title}</h3>
      </div>
      <p className="text-base leading-8 text-muted sm:text-lg">{content}</p>
      <div className="mt-6 h-1 w-16 bg-gradient-to-r from-gold to-rosegold rounded-full"></div>
    </motion.div>
  );
}

export default function AboutSection({ aboutMe, partnerPreference }) {
  return (
    <section className="section-padding bg-gradient-to-b from-transparent via-white/30 to-transparent">
      <div className="section-shell">
        <SectionDivider
          title="About & Partner Preference"
          subtitle="A glimpse into personality, values, and the kind of companionship being sought."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <TextCard title="About Me" content={aboutMe} delay={0} />
          <TextCard title="Partner Preference" content={partnerPreference} delay={0.2} />
        </div>
      </div>
    </section>
  );
}
