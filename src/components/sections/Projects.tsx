"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { projects } from "@/lib/data";
import type { ProjectCategory } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import FilterButton from "@/components/ui/FilterButton";
import ProjectCard from "@/components/ui/ProjectCard";

const categories: ProjectCategory[] = [
  "All",
  "Frontend",
  "Full Stack",
  "Mobile",
  "Backend",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <SectionWrapper id="projects">
      <SectionHeading title="My Projects" subtitle="Recent work" />

      {/* Filter buttons */}
      <div className="flex justify-center gap-3 mt-12 flex-wrap">
        {categories.map((cat) => (
          <FilterButton
            key={cat}
            category={cat}
            isActive={activeFilter === cat}
            onClick={() => setActiveFilter(cat)}
          />
        ))}
      </div>

      {/* Project grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
