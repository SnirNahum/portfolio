export interface NavLink {
  label: string;
  href: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  titles: string[];
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface AboutData {
  bio: string[];
  stats: Stat[];
  resumeUrl: string;
}

export type SkillCategory = "Frontend" | "Backend" | "Tools & DevOps";

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

export type ProjectCategory =
  | "All"
  | "Frontend"
  | "Full Stack"
  | "Mobile"
  | "Backend";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socials: SocialLinkData[];
}

export interface SocialLinkData {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
