import {
  HiOutlineEnvelope,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import { siteConfig } from "@/content/site";
import type { ContactContent, SectionIntro } from "@/types/content";

export const skillsSectionIntro: SectionIntro = {
  eyebrow: "Capabilities",
  title: "Core technologies I use to design, build, and ship full stack products.",
  description:
    "My experience spans React.js, Next.js, MERN stack development, backend APIs, databases, state management, and cloud tooling needed to move ideas into production.",
};

export const experienceSectionIntro: SectionIntro = {
  eyebrow: "Experience",
  title: "Professional work focused on full stack engineering, delivery quality, and product reliability.",
  description:
    "I’ve led frontend delivery, backend API development, authentication, infrastructure support, performance optimization, and cross-functional collaboration in Agile teams.",
};

export const projectsSectionIntro: SectionIntro = {
  eyebrow: "Selected Work",
  title: "Selected projects that reflect my real-world build and deployment experience.",
  description:
    "These live projects highlight responsive interfaces, booking systems, API integrations, cloud deployments, and practical product execution for senior full stack roles.",
};

export const contactContent: ContactContent = {
  section: {
    eyebrow: "Contact",
    title: "Let’s talk about product builds, senior full stack roles, and remote collaboration.",
    description:
      "If you’re hiring, building, or scaling a web product, I’m available for senior full stack, MERN stack, and product engineering conversations.",
  },
  cardBadge: "Direct Details",
  cardTitle: "Clear communication and dependable execution.",
  cardDescription:
    "Reach out for senior full stack opportunities, MERN stack roles, product development work, or engineering collaboration on scalable web applications.",
  formTitle: "Start a conversation",
  formDescription:
    "Send a message directly through the portfolio form, or use the contact details alongside it.",
  highlights: [
    {
      icon: HiOutlineEnvelope,
      label: "Email",
      value: siteConfig.email,
    },
    {
      icon: HiOutlineMapPin,
      label: "Location",
      value: siteConfig.location,
    },
    {
      icon: HiOutlinePhone,
      label: "Phone",
      value: "+92 305 1234336",
    },
    {
      icon: HiOutlineGlobeAlt,
      label: "Timezone",
      value: siteConfig.timezone,
    },
  ],
};

export const footerContent = {
  description:
    "Senior Full Stack Developer and MERN Stack Developer focused on scalable React, Next.js, Node.js, REST API, and cloud-deployed web applications.",
};

