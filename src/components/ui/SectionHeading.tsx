"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  alignment = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        alignment === "center" ? "text-center" : "text-left"
      )}
    >
      {subtitle && (
        <span className="text-accent-blue uppercase tracking-widest text-sm font-medium">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mt-2">
        {title}
      </h2>
      <div
        className={cn(
          "w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full",
          alignment === "center" ? "mx-auto" : ""
        )}
      />
    </motion.div>
  );
}
