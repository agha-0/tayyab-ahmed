import { FaGithub } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import type { SocialLink } from "@/types/content";

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/agha-0",
    label: "View GitHub profile",
    icon: FaGithub,
  },
  {
    name: "Email",
    href: "mailto:ahmedtayyab533@gmail.com",
    label: "Send an email",
    icon: HiOutlineEnvelope,
  },
];

