import type { ProjectItem } from "@/types/content";

export const projectItems: ProjectItem[] = [
  {
    slug: "wayfit-co",
    title: "Wayfit Co",
    description:
      "Smart fitness and class booking platform with schedule management and credit-based booking.",
    summary:
      "Architected booking interfaces, scheduling workflows, and real-time update patterns for class registrations. Supported credit-based booking, administrative scheduling, and Linux deployment workflows using PM2 and AWS EC2.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "PM2", "AWS EC2"],
    image: "/projects/signal-devops.svg",
    githubUrl: "https://github.com/agha-0",
    liveUrl: "https://wayfitco.com/",
    category: ["Featured", "Frontend", "Fitness", "SaaS"],
    featured: true,
  },
  {
    slug: "venuze",
    title: "Venuze",
    description: "Modern venue and service discovery platform built for polished user-facing web delivery.",
    summary:
      "Engineered frontend architecture from the ground up, translating UI requirements into accessible, responsive components while resolving cross-browser rendering issues for mobile and desktop users.",
    techStack: ["Next.js", "Tailwind CSS", "JavaScript (ES6+)", "Git"],
    image: "/projects/atlas-commerce.svg",
    githubUrl: "https://github.com/agha-0",
    liveUrl: "https://venuze.com/",
    category: ["Web App", "Frontend", "Platform"],
  },
  {
    slug: "reachgin",
    title: "Reachgin",
    description: "Booking and point-of-sale integration platform for modern business operations.",
    summary:
      "Led full-stack booking workflows with responsive client-side interfaces, backend logic, POS integration patterns, optimized API response handling, state management, and high-availability Vercel deployment.",
    techStack: ["React.js", "Node.js", "REST APIs", "Tailwind CSS", "MongoDB", "Git"],
    image: "/projects/launchpad-workflows.svg",
    githubUrl: "https://github.com/agha-0",
    liveUrl: "https://reachgin-booking.vercel.app/",
    category: ["Booking", "POS", "Frontend"],
  },
  {
    slug: "sapius",
    title: "Sapius",
    description: "High-performance enterprise web platform tailored to precise client specifications.",
    summary:
      "Developed bespoke UI components and secure RESTful API communication layers, improving page-load speed through efficient rendering, state management, staging deployment, and production rollout support.",
    techStack: ["React.js", "Express.js", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/projects/opspilot-ai.svg",
    githubUrl: "https://github.com/agha-0",
    liveUrl: "https://getsapius.co.uk/",
    category: ["Frontend", "Business Website"],
  },
  {
    slug: "cacheo",
    title: "Cacheo Garage",
    description: "Automotive service management platform for scheduling, routing, and service tracking.",
    summary:
      "Built specialized booking interfaces and backend routing flows for garage operations, improving appointment throughput, service scheduling, operational transparency, and application efficiency during peak booking workflows.",
    techStack: ["React.js", "Node.js", "REST APIs", "Tailwind CSS"],
    image: "/projects/signal-devops.svg",
    githubUrl: "https://github.com/agha-0",
    liveUrl: "https://cacheo.vercel.app/",
    category: ["Web App", "Frontend", "Deployment"],
  },
];
