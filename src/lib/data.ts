import type {
  NavLink,
  HeroData,
  AboutData,
  Skill,
  SkillCategory,
  Project,
  Experience,
  Testimonial,
  ContactInfo,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroData: HeroData = {
  greeting: "Hello, I'm",
  name: "Snir Nahum",
  titles: [
    "Full Stack Developer",
    "Frontend Enthusiast",
    "Backend Developer",
    "Problem Solver",
  ],
  description:
    "I build exceptional digital experiences that live at the intersection of design and technology. Passionate about creating performant, accessible, and beautiful web applications.",
  ctaPrimary: { label: "View My Work", href: "#projects" },
  ctaSecondary: { label: "Contact Me", href: "#contact" },
};

export const aboutData: AboutData = {
  bio: [
    "I'm a passionate Full Stack Developer with over 8 years of experience building web applications that users love. I specialize in React, Next.js, Node.js, and modern cloud technologies.",
    "When I'm not coding, you'll find me contributing to open-source projects, writing technical blog posts, or exploring new technologies. I believe in writing clean, maintainable code that stands the test of time.",
  ],
  stats: [
    { value: 8, suffix: "+", label: "Years Experience" },
    { value: 150, suffix: "+", label: "Projects Completed" },
    { value: 50, suffix: "+", label: "Happy Clients" },
  ],
  resumeUrl: "/resume.pdf",
};

export const skillCategories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Tools & DevOps",
];

export const skills: Skill[] = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 92, category: "Frontend" },
  { name: "Tailwind CSS", level: 88, category: "Frontend" },
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "PostgreSQL", level: 88, category: "Backend" },
  { name: "MongoDB", level: 82, category: "Backend" },
  { name: "Docker", level: 80, category: "Backend" },
  { name: "Git", level: 92, category: "Tools & DevOps" },
  { name: "AWS", level: 78, category: "Tools & DevOps" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and an admin dashboard.",
    image: "/images/projects/project-1.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "AI Analytics Dashboard",
    description:
      "An intelligent analytics dashboard with real-time data visualization, predictive insights, and customizable widgets.",
    image: "/images/projects/project-2.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind", "Chart.js"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "3",
    title: "Social Media App",
    description:
      "A cross-platform social media application with real-time messaging, stories, and content sharing features.",
    image: "/images/projects/project-3.jpg",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    category: "Mobile",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "4",
    title: "Task Management API",
    description:
      "A robust RESTful API for task management with authentication, role-based access control, and real-time notifications.",
    image: "/images/projects/project-4.jpg",
    tags: ["Node.js", "Express", "PostgreSQL", "Redis"],
    category: "Backend",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "5",
    title: "Portfolio Generator",
    description:
      "A dynamic portfolio generator that creates beautiful, customizable portfolio websites from a simple configuration file.",
    image: "/images/projects/project-5.jpg",
    tags: ["Next.js", "Prisma", "Tailwind", "Vercel"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "6",
    title: "Weather Application",
    description:
      "A beautiful weather app with location-based forecasts, interactive maps, and animated weather visualizations.",
    image: "/images/projects/project-6.jpg",
    tags: ["React", "OpenWeather API", "Framer Motion"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Senior Full Stack Developer",
    company: "TechCorp",
    period: "Jan 2022 - Present",
    description:
      "Leading the frontend architecture team and driving the adoption of modern web technologies across multiple product lines.",
    achievements: [
      "Architected a micro-frontend system serving 2M+ monthly users",
      "Reduced page load times by 60% through performance optimization",
      "Mentored a team of 5 junior developers",
    ],
    technologies: ["React", "Next.js", "TypeScript", "AWS", "PostgreSQL"],
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "StartupXYZ",
    period: "Mar 2019 - Dec 2021",
    description:
      "Built and maintained core product features for a fast-growing SaaS platform from initial MVP to Series B.",
    achievements: [
      "Developed the real-time collaboration engine used by 50K+ teams",
      "Implemented CI/CD pipelines reducing deployment time by 80%",
      "Built a component library adopted across 3 product teams",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: "3",
    role: "Junior Developer",
    company: "WebAgency",
    period: "Jun 2017 - Feb 2019",
    description:
      "Developed responsive websites and web applications for clients across various industries including healthcare and finance.",
    achievements: [
      "Delivered 30+ client projects on time and within budget",
      "Introduced automated testing, increasing code coverage to 85%",
      "Won internal hackathon with an accessibility auditing tool",
    ],
    technologies: ["JavaScript", "React", "PHP", "MySQL", "SASS"],
  },
];


export const contactInfo: ContactInfo = {
  email: "hello@alexmorgan.dev",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  socials: [
    { platform: "GitHub", url: "#", icon: "github" },
    { platform: "LinkedIn", url: "#", icon: "linkedin" },
    { platform: "Twitter", url: "#", icon: "twitter" },
    { platform: "Dribbble", url: "#", icon: "dribbble" },
  ],
};
