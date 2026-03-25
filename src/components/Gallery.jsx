"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionDivider from "./ui/SectionDivider";

export default function Gallery({ photos }) {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-16 sm:py-24">
      <div className="section-shell">
        <SectionDivider
          title="Photo Gallery"
          subtitle="A few graceful glimpses from the profile."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((src, index) => (
            <motion.button
              type="button"
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card overflow-hidden p-3 text-left"
              onClick={() => setSelected(src)}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px]">
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="relative w-full max-w-3xl"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-ink shadow"
                >
                  <X size={18} />
                </button>

                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-white">
                  <Image src={selected} alt="Selected photo" fill className="object-cover" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
