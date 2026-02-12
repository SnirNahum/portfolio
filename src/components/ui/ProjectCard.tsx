"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div variants={staggerItem} layout>
      <div className="glass-card overflow-hidden group cursor-pointer hover:border-border-hover transition-all duration-300">
        {/* Image area */}
        <div className="relative h-48 bg-bg-tertiary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center">
            <span className="text-4xl font-bold gradient-text opacity-50">
              {project.title.charAt(0)}
            </span>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center gap-3 p-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-xl border border-accent-blue/30 text-accent-blue hover:bg-accent-blue/10"
              >
                <Github size={14} />
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-text-primary">
            {project.title}
          </h3>
          <p className="text-text-secondary mt-2 text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
