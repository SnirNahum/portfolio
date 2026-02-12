"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { fadeInLeft, fadeInRight, floatingVariants } from "@/lib/animations";
import { aboutData } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading title="About Me" subtitle="Get to know me" />

      <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
        {/* Left: Image frame */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
            {/* Gradient border frame */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-purple p-[2px]">
              <div className="w-full h-full rounded-2xl bg-bg-primary" />
            </div>

            {/* Avatar placeholder */}
            <div className="absolute inset-4 rounded-2xl overflow-hidden bg-bg-tertiary bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center">
              <span className="text-6xl font-bold gradient-text">AM</span>
            </div>

            {/* Floating experience badge */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute -bottom-4 -right-4 glass-card px-4 py-3 flex items-center gap-2"
            >
              <span className="text-2xl font-bold gradient-text">
                {aboutData.stats[0].value}+
              </span>
              <span className="text-xs text-text-secondary leading-tight">
                Years
                <br />
                Experience
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Bio + Stats */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aboutData.bio.map((paragraph, i) => (
            <p key={i} className="text-text-secondary leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            {aboutData.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold gradient-text">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-text-muted text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Resume button */}
          <div className="mt-8">
            <Button
              variant="secondary"
              size="md"
              href={aboutData.resumeUrl}
              icon={<Download size={18} />}
            >
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
