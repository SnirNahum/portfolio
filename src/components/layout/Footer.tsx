"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { navLinks } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";

const socialIcons = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-glass bg-bg-secondary/50">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <span className="text-2xl font-bold gradient-text">AM.</span>
            <p className="text-text-muted mt-2 text-sm">
              Building the web, one pixel at a time.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex justify-center gap-6 flex-wrap">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.slice(1));
                }}
                className="text-text-muted text-sm hover:text-accent-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex justify-end gap-4">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-border-hover transition-all duration-300 text-text-secondary hover:text-accent-blue"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border-glass mt-8 pt-8 text-center text-text-muted text-sm">
          &copy; {new Date().getFullYear()} Alex Morgan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
