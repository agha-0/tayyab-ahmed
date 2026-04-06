import type { SiteConfig } from "@/types/content";

export const siteConfig: SiteConfig = {
  name: "Tayyab Ahmed",
  brand: "TA",
  title: "Senior Full Stack Developer",
  description:
    "Senior Full Stack Developer building scalable web applications with React.js, Next.js, Node.js, REST APIs, Tailwind CSS, and modern database systems.",
  email: "ahmedtayyab533@gmail.com",
  location: "Lahore, Pakistan",
  timezone: "UTC+05:00",
  resumeHref: "/cv.pdf",
  navItems: [
    { id: "hero", label: "Home", href: "#hero" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],
};

