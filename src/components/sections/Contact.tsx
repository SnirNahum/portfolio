"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { contactInfo } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  dribbble: Dribbble,
};

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionHeading title="Get in Touch" subtitle="Contact me" />

      <div className="grid md:grid-cols-2 gap-12 mt-16">
        {/* Left: Form */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>

        {/* Right: Contact info */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 h-full">
            <h3 className="text-xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                  <Mail className="text-accent-blue" size={20} />
                </div>
                <div>
                  <p className="text-text-muted text-sm">Email</p>
                  <p className="text-text-primary">{contactInfo.email}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                  <Phone className="text-accent-blue" size={20} />
                </div>
                <div>
                  <p className="text-text-muted text-sm">Phone</p>
                  <p className="text-text-primary">{contactInfo.phone}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-accent-blue" size={20} />
                </div>
                <div>
                  <p className="text-text-muted text-sm">Location</p>
                  <p className="text-text-primary">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border-glass my-8" />

            {/* Social links */}
            <div className="flex gap-4">
              {contactInfo.socials.map((social) => {
                const Icon = iconMap[social.icon] || Github;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-border-hover transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* Decorative element */}
            <div className="mt-8 h-32 rounded-xl bg-gradient-to-br from-accent-blue/5 to-accent-purple/5 border border-border-glass flex items-center justify-center">
              <p className="text-text-muted text-sm italic">
                Let&apos;s create something amazing together.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
