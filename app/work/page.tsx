"use client";
import {
  RiBriefcase2Fill,
  RiBriefcase2Line,
  RiExternalLinkLine,
} from "react-icons/ri";
import { WorkExperience } from "../utils/constants";
import { motion } from "framer-motion";

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

function WorkExperienceItem({
  experience,
  index,
}: {
  experience: WorkExperience;
  index: number;
}) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <motion.div
      className="mb-4 pb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ x: 5 }}
    >
      <h3 className="text-sm font-semibold mb-1 flex items-center gap-2">
        <RiBriefcase2Line className="text-gray-600 dark:text-gray-400 text-lg" />
        <span className="underline underline-offset-2">
          {experience.company}
        </span>
      </h3>
      <div className="flex flex-col md:flex-row justify-between">
        <p className="text-gray-500 text-xs md:text-sm mb-1">
          {experience.role}
        </p>
        <p className="text-gray-500 text-xs md:text-sm mb-1">
          {formatDate(experience.startDate)} -{" "}
          {experience.currentlyWorking
            ? "Present"
            : formatDate(experience.endDate!)}
        </p>
      </div>
      <p className="text-gray-400 text-xs md:text-sm mb-2">
        {experience.description}
      </p>
      <div className="flex flex-wrap gap-1 mb-3">
        {experience.technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs border border-gray-500 px-2 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
      <motion.a
        href={experience.websiteLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-gray-400 hover:text-gray-300 text-xs md:text-sm"
        whileHover={{ scale: 1.01 }}
      >
        <RiExternalLinkLine className="mr-1" />
        Company Website
      </motion.a>
    </motion.div>
  );
}

export default function Page() {
  return (
    <main className="flex flex-col items-start justify-start w-full md:w-[75%] lg:w-[50%] p-3 md:p-5 mx-auto">
      <div>
        {workExperiences.map((experience, index) => (
          <WorkExperienceItem
            key={index}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}
