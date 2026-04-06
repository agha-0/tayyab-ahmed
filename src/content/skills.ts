import {
  FaAws,
  FaDatabase,
  FaGitAlt,
  FaNodeJs,
  FaReact,
  FaServer,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import {
  HiOutlineBeaker,
  HiOutlineCircleStack,
  HiOutlineCloud,
  HiOutlineCodeBracket,
  HiOutlineCodeBracketSquare,
  HiOutlineCubeTransparent,
  HiOutlineGlobeAlt,
  HiOutlineRocketLaunch,
  HiOutlineServerStack,
} from "react-icons/hi2";
import type { SkillCategory } from "@/types/content";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Modern frontend development focused on responsive UI, maintainability, and performance.",
    items: [
      { name: "React.js", icon: FaReact, proficiency: "Advanced" },
      { name: "Next.js", icon: HiOutlineRocketLaunch, proficiency: "Advanced" },
      { name: "JavaScript (ES6+)", icon: HiOutlineCodeBracket, proficiency: "Advanced" },
      { name: "Tailwind CSS", icon: FaWandMagicSparkles, proficiency: "Advanced" },
      { name: "HTML & CSS", icon: HiOutlineCubeTransparent, proficiency: "Advanced" },
    ],
  },
  {
    title: "Backend",
    description: "API development, server-side logic, and application integrations for production systems.",
    items: [
      { name: "Node.js", icon: FaNodeJs, proficiency: "Advanced" },
      { name: "Express.js", icon: HiOutlineServerStack, proficiency: "Advanced" },
      { name: "REST API Development", icon: HiOutlineBeaker, proficiency: "Advanced" },
      { name: "System Integrations", icon: FaServer, proficiency: "Advanced" },
      { name: "Secure API Delivery", icon: HiOutlineCodeBracketSquare, proficiency: "Advanced" },
    ],
  },
  {
    title: "Databases",
    description: "Database experience across document and relational systems used in web applications.",
    items: [
      { name: "MongoDB", icon: HiOutlineCircleStack, proficiency: "Advanced" },
      { name: "PostgreSQL", icon: FaDatabase, proficiency: "Advanced" },
    ],
  },
  {
    title: "Cloud & Delivery",
    description: "Foundational deployment and collaboration tooling for shipping and maintaining applications.",
    items: [
      { name: "AWS EC2", icon: FaAws, proficiency: "Intermediate" },
      { name: "Azure", icon: HiOutlineCloud, proficiency: "Intermediate" },
      { name: "Git", icon: FaGitAlt, proficiency: "Advanced" },
      { name: "CI/CD Basics", icon: HiOutlineGlobeAlt, proficiency: "Intermediate" },
    ],
  },
];

