"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 } from "lucide-react";
import { staggerContainer, staggerItem, progressBarVariants } from "@/lib/animations";
import { skillCategories, skills } from "@/lib/data";
import type { SkillCategory } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import FilterButton from "@/components/ui/FilterButton";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(
    skillCategories[0]
  );

  const filteredSkills = skills.filter(
    (s) => s.category === activeCategory
  );

  return (
    <SectionWrapper id="skills">
      <SectionHeading title="Tech Stack" subtitle="My skills" />

      {/* Category tabs */}
      <div className="flex justify-center gap-3 mt-12 flex-wrap">
        {skillCategories.map((cat) => (
          <FilterButton
            key={cat}
            category={cat}
            isActive={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          />
        ))}
      </div>

      {/* Skills grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={staggerItem}
              className="glass-card p-6 text-center group hover:border-border-hover transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
                <Code2 className="text-accent-blue" size={24} />
              </div>
              <p className="text-sm font-medium text-text-primary mt-2">
                {skill.name}
              </p>

              {/* Progress bar */}
              <div className="mt-3 h-1.5 bg-bg-tertiary rounded-full overflow-hidden">
                <motion.div
                  variants={progressBarVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={skill.level}
                  className="h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full"
                />
              </div>
              <p className="text-xs text-text-muted mt-1">{skill.level}%</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
