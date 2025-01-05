import {
  RiMailLine,
  RiTwitterXLine,
  RiLinkedinLine,
  RiGithubLine,
  RiFileTextLine,
  RiGitRepositoryLine,
} from "react-icons/ri";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  tags: string[];
  publishedDate: string;
  readTime: string;
  author: string;
  link: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  description: string;
  websiteLink: string;
  endDate: string | null;
  startDate: string;
  currentlyWorking: boolean;
  technologies: string[];
}

export interface SocialLink {
  name: string;
  icon: React.ElementType;
  href: string;
}

export const projects: Project[] = [
  {
    title: "FileDrop",
    description:
      "Launched open-source platform for secure file sharing using WebRTC. Implemented seamless peer-to-peer file transfers and real-time chat, with cross-platform compatibility.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Socket.io",
      "WebRTC",
    ],
    liveLink: "https://file-drops.vercel.app/",
    githubLink: "https://github.com/YugBhanushali/FileDrop",
  },
  {
    title: "Code To Image",
    description:
      "Developed a tool enabling users to create visually appealing code snippets with customizable fonts, themes, and backgrounds. Featured on Product Hunt, ranked 48th of the day.",
    technologies: ["React.js", "Styled-Components", "Vercel"],
    liveLink: "https://codetoimg.vercel.app/",
    githubLink: "https://github.com/YugBhanushali/code-to-image",
  },
  {
    title: "KeyBeats",
    description:
      "Realistic mechanical keyboard sounds with 13 different switch profiles. A menubar application with adjustable volume control and an easy-to-use interface.",
    technologies: ["Electron.js", "JavaScript"],
    liveLink: "https://keybeats.yugbhanushali.com/",
    githubLink: "https://github.com/YugBhanushali/keyBeats",
  },
  {
    title: "Git Fetch Pro",
    description:
      "An npm package that allows users to easily download specific subfolders from GitHub repositories, offering both a user-friendly interface and a CLI tool for advanced usage. Users can download only what they need without cloning the entire repository.",
    technologies: ["TypeScript", "Node.js", "NPM"],
    liveLink: "https://gitfetchpro.vercel.app/", // You can add the live link here if available
    githubLink: "https://github.com/YugBhanushali/git-fetch-pro", // Replace with the GitHub repo link
  },
  {
    title: "ZipURL",
    description:
      "URL shortening service with customizable links, link management, click analytics, and QR code generation for easy sharing.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    liveLink: "https://zipurl.vercel.app/",
    githubLink: "https://github.com/YugBhanushali/ZipURL",
  },
  {
    title: "WebWall",
    description:
      "Command-line tool to block and unblock websites by modifying the hosts file, providing efficient website access management.",
    technologies: ["JavaScript", "npm-package"],
    liveLink: "https://www.npmjs.com/package/webwall",
    githubLink: "https://github.com/YugBhanushali/webwall",
  },
  {
    title: "Supabase Contribution",
    description:
      "Fixed a critical bug in Supabase Website, improving the app's stability and preventing crashes when hovering over search results containing quotes.",
    technologies: ["TypeScript", "React.js"],
    liveLink: "https://supabase.com",
    githubLink: "https://github.com/supabase/supabase/pull/18302",
  },
  {
    title: "Event Hub",
    description:
      "Engineered a student event platform with secure club sign-in and intuitive event management features, including a card-based UI for event highlighting.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    liveLink: "hhttps://eventhubs.vercel.app/",
    githubLink: "https://github.com/YugBhanushali/Event-Hub-Frontend",
  },
];

export const workExperiences: WorkExperience[] = [
  {
    company: "Tracks and Towers Pvt Ltd",
    role: "Founding Engineer",
    description: `
      Building scalable backend systems and managing deployments, with occasional frontend development.
    `,
    websiteLink: "https://tracksandtowers.com",
    startDate: "March 2024",
    endDate: "December 2024",
    currentlyWorking: false,
    technologies: [
      "TypeScript",
      "Node.js",
      "Next.js",
      "Supabase",
      "Shadcn",
      "NextAuth",
      "Zod",
      "Prisma",
      "VPS",
      "Docker",
      "CI/CD",
      "Grafana",
      "Prometheus",
    ],
  },
  {
    company: "Healiom Inc",
    role: "Frontend Development Intern",
    description: `
      Worked on developing and improving the patient portal.
    `,
    websiteLink: "https://healiom.com",
    startDate: "March 2024",
    endDate: "May 2024",
    currentlyWorking: false,
    technologies: [
      "React.js",
      "Redux",
      "JavaScript",
      "Shadcn UI",
      "GetStream SDK",
    ],
  },
];
export const skills = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Prisma",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "WebRTC",
  "Redux",
  "Python",
  "Java",
  "C",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "Git",
  "Linux",
  "OOP",
];

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    icon: RiMailLine,
    href: "mailto:yug.h.bhanushali1@gmail.com",
  },
  {
    name: "Twitter",
    icon: RiTwitterXLine,
    href: "https://twitter.com/TheYug03",
  },
  {
    name: "LinkedIn",
    icon: RiLinkedinLine,
    href: "https://www.linkedin.com/in/yug-bhanushali-b3b872224/",
  },
  {
    name: "GitHub",
    icon: RiGithubLine,
    href: "https://github.com/YugBhanushali",
  },
  { name: "Resume", icon: RiFileTextLine, href: "/resume/Yug-Bhanushali.pdf" },
  {
    name: "Repository",
    icon: RiGitRepositoryLine, // You can choose a suitable icon
    href: "https://github.com/YugBhanushali/v2-portfolio", // Replace with your repo link
  },
];
