"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-transparent via-white/30 to-white/50">
      <div className="section-shell">
        <div className="py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-rosegold animate-pulse" />
              <div className="h-px bg-gradient-to-r from-transparent via-rosegold to-transparent flex-1 max-w-[100px]" />
              <span className="text-sm font-medium text-gold">With Best Wishes</span>
              <div className="h-px bg-gradient-to-r from-rosegold via-transparent to-rosegold flex-1 max-w-[100px]" />
              <Heart className="w-5 h-5 text-rosegold animate-pulse" />
            </div>
            
            <p className="text-lg leading-relaxed text-muted font-medium">
              Thank you for visiting my profile. I wish you the very best in your search for a life partner.
            </p>
            
            <div className="mt-8 flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold opacity-60"></div>
              <div className="w-2 h-2 rounded-full bg-rosegold opacity-60"></div>
              <div className="w-2 h-2 rounded-full bg-gold opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-rosegold to-gold opacity-30"></div>
    </footer>
  );
}
