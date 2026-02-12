"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, timelineDotVariants } from "@/lib/animations";
import type { Experience } from "@/types";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex items-start gap-8 md:gap-0">
      {/* Desktop: alternating layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 w-full items-start">
        {/* Left content */}
        <div className={isEven ? "" : "order-3"}>
          {isEven && (
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-6 hover:border-border-hover transition-all duration-300"
            >
              <TimelineContent experience={experience} />
            </motion.div>
          )}
        </div>

        {/* Center dot */}
        <div className="flex flex-col items-center order-2">
          <motion.div
            variants={timelineDotVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-4 h-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple ring-4 ring-bg-primary"
          />
        </div>

        {/* Right content */}
        <div className={isEven ? "order-3" : ""}>
          {!isEven && (
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-6 hover:border-border-hover transition-all duration-300"
            >
              <TimelineContent experience={experience} />
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile: all on right */}
      <div className="md:hidden flex gap-6 w-full">
        <div className="flex flex-col items-center">
          <motion.div
            variants={timelineDotVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-4 h-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple ring-4 ring-bg-primary shrink-0"
          />
          <div className="w-0.5 flex-1 bg-gradient-to-b from-accent-blue/50 to-transparent mt-2" />
        </div>
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-6 flex-1 mb-4 hover:border-border-hover transition-all duration-300"
        >
          <TimelineContent experience={experience} />
        </motion.div>
      </div>
    </div>
  );
}

function TimelineContent({ experience }: { experience: Experience }) {
  return (
    <>
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">
            {experience.role}
          </h3>
          <p className="text-accent-blue font-medium">{experience.company}</p>
        </div>
        <span className="text-text-muted text-sm whitespace-nowrap">
          {experience.period}
        </span>
      </div>
      <p className="text-text-secondary text-sm leading-relaxed mb-3">
        {experience.description}
      </p>
      <ul className="space-y-1.5 mb-4">
        {experience.achievements.map((achievement, i) => (
          <li
            key={i}
            className="text-text-secondary text-sm flex items-start gap-2"
          >
            <span className="text-accent-blue mt-1.5 text-xs">&#9679;</span>
            {achievement}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );
}
