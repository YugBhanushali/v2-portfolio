"use client";
import { RiExternalLinkLine } from "react-icons/ri";
import { WorkExperience } from "../utils/constants";
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

const workExperiences: WorkExperience[] = [
  {
    company: "TechCorp",
    role: "Senior Frontend Developer",
    description:
      "Led the development of responsive web applications using React and Next.js. Implemented state-of-the-art UI/UX designs and improved overall performance.",
    websiteLink: "https://techcorp.com",
    startDate: "2021-06-01",
    endDate: null,
    currentlyWorking: true,
    technologies: ["React", "Next.js", "TypeScript", "GraphQL", "Tailwind CSS"],
  },
  {
    company: "InnoSoft",
    role: "Full Stack Engineer",
    description:
      "Developed and maintained full-stack applications using Node.js and React. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    websiteLink: "https://innosoft.com",
    startDate: "2019-03-15",
    endDate: "2021-05-31",
    currentlyWorking: false,
    technologies: ["Node.js", "React", "Express", "MongoDB", "Docker"],
  },
  // Add more work experiences as needed
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
      className="mb-2 pb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ x: 5 }}
    >
      <h3 className="text-sm font-semibold mb-0 flex items-center gap-2">
        <FiBriefcase className="text-gray-400" />
        <span className="underline underline-offset-2">
          {experience.company}
        </span>
      </h3>
      <div className="flex justify-between">
        <p className="text-gray-500 text-sm mb-1">{experience.role}</p>
        <p className="text-gray-500 text-sm mb-1">
          {formatDate(experience.startDate)} -{" "}
          {experience.currentlyWorking
            ? "Present"
            : formatDate(experience.endDate!)}
        </p>
      </div>
      <p className="text-gray-400 text-xsm mb-2 text-sm">
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
        className="flex items-center text-gray-400 hover:text-gray-300 text-sm"
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
    <main className="flex flex-col items-start justify-start w-[50%] p-5">
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
