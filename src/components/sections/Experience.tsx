"use client";

import { experiences } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading title="Experience" subtitle="My journey" />

      <div className="relative mt-16">
        {/* Center line (desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue to-accent-purple -translate-x-1/2" />

        {/* Timeline items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
