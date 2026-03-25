"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Download, PhoneCall, Star, MessageCircle, Instagram, Linkedin } from "lucide-react";
import { downloadPDF } from "../utils/generatePDF";

export default function Hero({ hero, contact }) {
  return (
    <section className="relative overflow-hidden pattern-overlay min-h-screen flex items-center">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rosegold/20 to-gold/20 border border-rosegold/30 backdrop-blur-sm">
              <Star className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Premium Matrimonial Profile</span>
              <Star className="w-4 h-4 text-gold" />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gradient leading-tight">
                {hero.name}
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 text-lg sm:text-xl text-gold font-medium">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-gold"></div>
                {hero.title}
                <div className="w-8 h-0.5 bg-gradient-to-r from-gold to-transparent"></div>
              </div>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg leading-8 text-muted max-w-2xl mx-auto lg:mx-0"
            >
              {hero.intro}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#profile"
                className="btn-primary group"
              >
                <Heart className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                {hero.ctaPrimary}
              </a>

              <button
                onClick={downloadPDF}
                className="btn-secondary group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                {hero.ctaSecondary}
              </button>

              <a
                href="#contact Details"
                className="inline-flex items-center gap-2 rounded-full border-2 border-rosegold/30 bg-gradient-to-r from-blush/70 to-ivory/70 px-8 py-4 text-base font-semibold text-ink shadow-lg transition-all duration-300 hover:from-blush hover:to-ivory hover:border-rosegold/50 hover:shadow-xl active:scale-[0.98]"
              >
                <PhoneCall className="w-5 h-5" />
                Contact Details
              </a>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start mt-6"
            >
              <a
                href="https://wa.me/917022918586"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              
              <a
                href="https://www.instagram.com/real_shittt_69/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/dhiraj-kumar-85b75a12a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-rosegold rounded-[32px] blur-3xl opacity-20"></div>
              <div className="glass-card soft-ring overflow-hidden p-6 sm:p-8 relative card-hover">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-gradient-to-br from-blush to-ivory">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <Image
                    src={hero.photo}
                    alt={hero.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/10 to-rosegold/10 border border-gold/20">
                    <Heart className="w-4 h-4 text-gold" />
                    <span className="text-sm font-medium text-gold">Seeking Life Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
