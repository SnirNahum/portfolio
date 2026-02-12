"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 text-center"
      >
        <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-text-secondary">
          Thank you for reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-accent-blue hover:underline text-sm cursor-pointer"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-text-secondary text-sm font-medium mb-2"
        >
          Your Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          placeholder="John Doe"
          className="w-full bg-bg-secondary border border-border-glass rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 outline-none transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-text-secondary text-sm font-medium mb-2"
        >
          Your Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="john@example.com"
          className="w-full bg-bg-secondary border border-border-glass rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 outline-none transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-text-secondary text-sm font-medium mb-2"
        >
          Your Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          placeholder="Tell me about your project..."
          className="w-full bg-bg-secondary border border-border-glass rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 outline-none transition-all resize-none"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        icon={
          isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
            />
          ) : (
            <Send size={18} />
          )
        }
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
