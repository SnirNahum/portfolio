"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FilterButtonProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
}

export default function FilterButton({
  category,
  isActive,
  onClick,
}: FilterButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer",
        isActive
          ? "bg-gradient-to-r from-accent-blue to-accent-purple text-white"
          : "bg-white/5 text-text-secondary border border-border-glass hover:text-text-primary hover:border-border-hover"
      )}
    >
      {category}
    </motion.button>
  );
}
