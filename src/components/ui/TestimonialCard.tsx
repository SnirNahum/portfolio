"use client";

import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="glass-card p-8 md:p-10">
      <Quote className="text-accent-blue/20 mb-4" size={40} />

      <p className="text-text-secondary text-lg leading-relaxed italic mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-text-primary">
            {testimonial.name}
          </p>
          <p className="text-text-muted text-sm">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>

        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < testimonial.rating
                  ? "text-accent-blue fill-accent-blue"
                  : "text-text-muted/30"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
