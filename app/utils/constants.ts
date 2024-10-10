import {
  RiMailLine,
  RiTwitterXLine,
  RiLinkedinLine,
  RiGithubLine,
  RiFileTextLine,
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
    title: "Supabase Contribution",
    description:
      "Fixed a critical bug in Supabase documentation, improving the app's stability and preventing crashes when hovering over search results containing quotes.",
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
  {
    title: "KeyBeats",
    description:
      "Realistic mechanical keyboard sounds with 13 different switch profiles. A menubar application with adjustable volume control and an easy-to-use interface.",
    technologies: ["Electron.js", "JavaScript"],
    liveLink: "https://github.com/YugBhanushali/keyBeats/releases/tag/1.1.3",
    githubLink: "https://github.com/YugBhanushali/keyBeats",
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
    title: "ZipURL",
    description:
      "URL shortening service with customizable links, link management, click analytics, and QR code generation for easy sharing.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    liveLink: "https://zipurl.vercel.app/",
    githubLink: "https://github.com/YugBhanushali/ZipURL",
  },
];

export const workExperiences: WorkExperience[] = [
  {
    company: "Tracks and Towers Pvt Ltd",
    role: "Full Stack Developer Intern",
    description: `
      Built scalable REST APIs with TypeScript and Node.js, integrating with Supabase (PostgreSQL).
      Developed efficient UIs using Next.js, Shadcn, and Prisma, improving user experience by 40%.
      Managed VPS hosting and Dockerized apps, ensuring 98% uptime.
      Implemented CI/CD workflows, improving deployment speed by 70%.
    `,
    websiteLink: "https://tracksandtowers.com",
    startDate: "March 2024",
    endDate: null,
    currentlyWorking: true,
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
    ],
  },
  {
    company: "Healiom Inc",
    role: "Frontend Developer Intern",
    description: `
      Developed patient portal using React.js, Redux, and Shadcn UI.
      Integrated GetStream SDK for real-time chat.
      Built responsive front-end components for high performance.
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
  { name: "Resume", icon: RiFileTextLine, href: "/resume/resume.pdf" },
];
