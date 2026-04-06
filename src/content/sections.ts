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
    "My experience spans modern frontend frameworks, backend APIs, databases, and the cloud tooling needed to move ideas into production.",
};

export const experienceSectionIntro: SectionIntro = {
  eyebrow: "Experience",
  title: "Professional work focused on full stack engineering, delivery quality, and product reliability.",
  description:
    "I’ve contributed across frontend delivery, backend API development, system integrations, and cross-functional collaboration in professional engineering teams.",
};

export const projectsSectionIntro: SectionIntro = {
  eyebrow: "Selected Work",
  title: "Selected projects that reflect my real-world build and deployment experience.",
  description:
    "These live projects highlight the kind of responsive interfaces, integrated systems, and practical product execution I bring to senior full stack roles.",
};

export const contactContent: ContactContent = {
  section: {
    eyebrow: "Contact",
    title: "Let’s talk about product builds, senior full stack roles, and remote collaboration.",
    description:
      "If you’re hiring, building, or scaling a web product, I’m available for conversations around senior engineering contributions and full stack delivery.",
  },
  cardBadge: "Direct Details",
  cardTitle: "Clear communication and dependable execution.",
  cardDescription:
    "Reach out for senior full stack opportunities, product development work, or engineering collaboration on scalable web applications.",
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
    "Senior Full Stack Developer focused on scalable React, Next.js, Node.js, and API-driven web applications.",
};

