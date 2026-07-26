import {
  HiOutlineCloud,
  HiOutlineCpuChip,
  HiOutlineSparkles,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import type { HeroContent } from "@/types/content";

export const heroContent: HeroContent = {
  eyebrow: "Senior Full Stack Developer | MERN Stack Developer",
  title: "Building scalable full stack applications with secure APIs and reliable cloud delivery.",
  summary:
    "Senior Software Engineer leading full-cycle delivery of React.js, Next.js, and MERN stack applications with secure Node.js and REST API backends.",
  description:
    "I lead development teams, improve application performance, and support AWS EC2 deployments with Nginx, PM2, Linux, authentication, state management, MongoDB, and PostgreSQL.",
  availability: "Open to senior full stack roles, MERN stack roles, remote collaboration, and product engineering work.",
  panelEyebrow: "Core Strengths",
  panelTitle: "Senior full stack delivery from interface to API layer",
  badges: [
    { label: "React.js", icon: HiOutlineSquares2X2 },
    { label: "Next.js", icon: HiOutlineCloud },
    { label: "Node.js APIs", icon: HiOutlineSparkles },
    { label: "Tailwind CSS", icon: HiOutlineCpuChip },
  ],
  focusAreas: [
    "Responsive frontend development with React.js, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3, and JavaScript ES6+.",
    "Secure backend systems with Node.js, Express.js, Nest.js, Fastify, REST APIs, authentication, and authorization.",
    "Database-backed applications using MongoDB and PostgreSQL with maintainable data structures and state management.",
    "Cloud deployment and performance optimization on AWS EC2, Nginx, PM2, Linux, CI/CD, and Agile teams.",
  ],
  stats: [
    { value: "4+", label: "Years of full stack experience" },
    { value: "5", label: "Production projects launched" },
    { value: "Lead", label: "Engineering delivery" },
  ],
};
