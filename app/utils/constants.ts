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
      "A short description of project 1. This project does something really cool.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    liveLink: "https://project1.com",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    title: "Code To Image",
    description: "Project 2 is an awesome app that solves a specific problem.",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    liveLink: "https://project2.com",
    githubLink: "https://github.com/yourusername/project2",
  },
  {
    title: "FileDrop",
    description:
      "A short description of project 1. This project does something really cool.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    liveLink: "https://project1.com",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    title: "Code To Image",
    description: "Project 2 is an awesome app that solves a specific problem.",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    liveLink: "https://project2.com",
    githubLink: "https://github.com/yourusername/project2",
  },
  {
    title: "FileDrop",
    description:
      "A short description of project 1. This project does something really cool.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    liveLink: "https://project1.com",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    title: "Code To Image",
    description: "Project 2 is an awesome app that solves a specific problem.",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    liveLink: "https://project2.com",
    githubLink: "https://github.com/yourusername/project2",
  },
  // Add more projects as needed
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
