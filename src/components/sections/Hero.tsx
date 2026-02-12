"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroTextVariants } from "@/lib/animations";
import { heroData } from "@/lib/data";
import Button from "@/components/ui/Button";
import TypeWriter from "@/components/ui/TypeWriter";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />

      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-accent-purple/10 rounded-full blur-3xl" />

      <div className="relative z-10 section-container text-center">
        <motion.p
          variants={heroTextVariants}
          custom={0}
          initial="hidden"
          animate="visible"
          className="text-accent-blue text-lg font-medium mb-4"
        >
          {heroData.greeting}
        </motion.p>

        <motion.h1
          variants={heroTextVariants}
          custom={0.2}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary mb-4"
        >
          {heroData.name}
        </motion.h1>

        <motion.div
          variants={heroTextVariants}
          custom={0.4}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-4xl font-semibold mb-6"
        >
          <span className="text-text-secondary">I'm a </span>
          <TypeWriter words={heroData.titles} className="gradient-text" />
        </motion.div>

        <motion.p
          variants={heroTextVariants}
          custom={0.6}
          initial="hidden"
          animate="visible"
          className="text-text-secondary max-w-2xl mx-auto text-lg mb-10"
        >
          {heroData.description}
        </motion.p>

        <motion.div
          variants={heroTextVariants}
          custom={0.8}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <Button variant="primary" size="lg" href={heroData.ctaPrimary.href}>
            {heroData.ctaPrimary.label}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href={heroData.ctaSecondary.href}
          >
            {heroData.ctaSecondary.label}
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-text-muted" size={32} />
      </motion.div>
    </section>
  );
}
