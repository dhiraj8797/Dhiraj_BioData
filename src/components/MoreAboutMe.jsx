"use client";

import { motion } from "framer-motion";
import SectionDivider from "./ui/SectionDivider";
import { Plane, ShoppingBag, ChefHat, Sparkles } from "lucide-react";

export default function MoreAboutMe() {
  const hobbies = [
    {
      icon: ChefHat,
      title: "Cooking",
      description: "Love cooking—be ready to enjoy your favorite dishes made with care 😊",
      color: "from-gold to-rosegold"
    },
    {
      icon: Plane,
      title: "Traveling",
      description: "A passion—expect trips every few months ✈️",
      color: "from-rosegold to-gold"
    },
    {
      icon: Sparkles,
      title: "Exploring",
      description: "Enjoy exploring new places, cultures, and experiences",
      color: "from-gold to-amber-600"
    },
    {
      icon: ShoppingBag,
      title: "Shopping",
      description: "And yes… I admit, I'm a bit of a shopaholic 😄",
      color: "from-amber-600 to-gold"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-transparent via-white/20 to-transparent">
      <div className="section-shell">
        <SectionDivider
          title="🌟 A Little More About Me"
          subtitle="Fun facts and hobbies that make me who I am"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 text-center card-hover group"
              >
                <div className={`inline-flex rounded-2xl bg-gradient-to-r ${hobby.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">{hobby.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{hobby.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
