"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  mobileMenuVariants,
  mobileMenuItemVariants,
} from "@/lib/animations";
import { navLinks } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={mobileMenuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-text-primary p-2 cursor-pointer"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {/* Nav links */}
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                variants={mobileMenuItemVariants}
                initial="closed"
                animate="open"
                transition={{ delay: index * 0.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.slice(1));
                  onClose();
                }}
                className="text-3xl font-semibold text-text-primary hover:text-accent-blue transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Bottom social text */}
          <div className="absolute bottom-8 flex gap-6 text-text-muted text-sm">
            <a href="#" className="hover:text-accent-blue transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-accent-blue transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-accent-blue transition-colors">
              Twitter
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
