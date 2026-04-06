import {
  HiOutlineCloud,
  HiOutlineCpuChip,
  HiOutlineSparkles,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import type { HeroContent } from "@/types/content";

export const heroContent: HeroContent = {
  eyebrow: "Senior Developer | React | Next.js | Node.js",
  title: "Building scalable products with clean architecture and reliable delivery.",
  summary:
    "Senior Full Stack Developer with 3+ years of experience building fast, responsive, and scalable web applications across modern frontend and backend stacks.",
  description:
    "I work across React.js, Next.js, Node.js, REST APIs, Tailwind CSS, MongoDB, and PostgreSQL to ship production-ready applications with strong performance, maintainability, and collaboration in remote teams.",
  availability: "Open to senior full stack roles, remote collaboration, and product engineering work.",
  panelEyebrow: "Core Strengths",
  panelTitle: "Senior full stack delivery from interface to API layer",
  badges: [
    { label: "React.js", icon: HiOutlineSquares2X2 },
    { label: "Next.js", icon: HiOutlineCloud },
    { label: "Node.js APIs", icon: HiOutlineSparkles },
    { label: "Tailwind CSS", icon: HiOutlineCpuChip },
  ],
  focusAreas: [
    "Responsive frontend development with React.js, Next.js, Tailwind CSS, HTML, CSS, and modern JavaScript.",
    "Secure, high-performance backend APIs with Node.js, Express.js, and REST-driven integrations.",
    "Database-backed applications using MongoDB and PostgreSQL with maintainable data flow design.",
    "Performance optimization, code quality improvements, and effective remote team collaboration.",
  ],
  stats: [
    { value: "3+", label: "Years of full stack experience" },
    { value: "4", label: "Production projects highlighted" },
    { value: "2", label: "Engineering roles completed" },
  ],
};

