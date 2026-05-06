import type { ProjectItem } from "@/types/content";

export const projectItems: ProjectItem[] = [
  {
    slug: "venzue",
    title: "Venzue",
    description: "Modern web application delivered as a polished production project.",
    summary:
      "A featured full stack build focused on clean UI delivery, production deployment, and practical user-facing workflows using the same engineering foundations highlighted across my professional experience.",
    techStack: ["React.js", "Next.js", "Node.js", "Tailwind CSS"],
    image: "/projects/atlas-commerce.svg",
    githubUrl: "https://github.com/agha-0",
    liveUrl: "https://venuze.vercel.app/",
    category: ["Featured", "Full Stack", "Web App"],
    featured: true,
  },
  {
    slug: "easyrsv",
    title: "EasyRSV",
    description: "Live product experience built for responsive and reliable web delivery.",
    summary:
      "This project reflects my approach to shipping maintainable interfaces, integrating backend functionality, and building applications that are ready for real-world users and iterative product growth.",
    techStack: ["React.js", "Next.js", "REST APIs", "Tailwind CSS"],
    image: "/projects/opspilot-ai.svg",
    githubUrl: "https://github.com/agha-0",
    liveUrl: "https://easyrsv.com/",
    category: ["Full Stack", "SaaS"],
  },
  {
    slug: "x-platform",
    title: "X Platform",
    description: "Scalable web platform centered on performance and integration work.",
    summary:
      "Built with the same full stack mindset I bring to client and product teams: strong frontend delivery, dependable API behavior, and attention to maintainable implementation.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/launchpad-workflows.svg",
    githubUrl: "https://github.com/agha-0",
    liveUrl: "https://reachgin.com/",
    category: ["Platform", "Full Stack"],
  },
  {
    slug: "wayfit-co",
    title: "Wayfit Co",
    description:
      "Corporate fitness platform connecting companies to gyms and studios through one subscription.",
    summary:
      "Worked as the frontend developer on a decoupled platform where a Next.js and TypeScript client consumed a Laravel API backend. Focused on building responsive product interfaces, integrating backend APIs cleanly, and supporting production delivery on AWS EC2 with Nginx, PHP-FPM, and Node.js in the deployment stack.",
    techStack: ["Next.js", "React", "TypeScript", "Laravel", "AWS EC2"],
    image: "/projects/signal-devops.svg",
    githubUrl: "https://github.com/agha-0",
    liveUrl: "https://wayfit.vercel.app/",
    category: ["Web App", "Frontend"],
  },
];

