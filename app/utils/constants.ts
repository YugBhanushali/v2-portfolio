export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
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
    liveLink: "https://filedrop.com",
    githubLink: "https://github.com/your-username/filedrop",
  },
  {
    title: "Code To Image",
    description:
      "Developed a tool enabling users to create visually appealing code snippets with customizable fonts, themes, and backgrounds. Featured on Product Hunt, ranked 48th of the day.",
    technologies: ["React.js", "Styled-Components", "Vercel"],
    liveLink: "https://codetoimage.com",
    githubLink: "https://github.com/your-username/codetoimage",
  },
  {
    title: "Supabase Contribution",
    description:
      "Fixed a critical bug in Supabase documentation, improving the app's stability and preventing crashes when hovering over search results containing quotes.",
    technologies: ["TypeScript", "React.js"],
    liveLink: "https://supabase.com",
    githubLink: "https://github.com/supabase",
  },
  {
    title: "Event Hub",
    description:
      "Engineered a student event platform with secure club sign-in and intuitive event management features, including a card-based UI for event highlighting.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    liveLink: "https://eventhub.com",
    githubLink: "https://github.com/your-username/eventhub",
  },
  {
    title: "KeyBeats",
    description:
      "Realistic mechanical keyboard sounds with 13 different switch profiles. A menubar application with adjustable volume control and an easy-to-use interface.",
    technologies: ["Electron.js", "JavaScript"],
    liveLink: "https://keybeats.com",
    githubLink: "https://github.com/your-username/keybeats",
  },
  {
    title: "WebWall",
    description:
      "Command-line tool to block and unblock websites by modifying the hosts file, providing efficient website access management.",
    technologies: ["JavaScript"],
    liveLink: "https://webwall.com",
    githubLink: "https://github.com/your-username/webwall",
  },
  {
    title: "ZipURL",
    description:
      "URL shortening service with customizable links, link management, click analytics, and QR code generation for easy sharing.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    liveLink: "https://zipurl.com",
    githubLink: "https://github.com/your-username/zipurl",
  },
];

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
