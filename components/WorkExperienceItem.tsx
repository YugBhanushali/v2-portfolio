"use client";
import { RiBriefcase2Line, RiExternalLinkLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { WorkExperience } from "@/app/utils/constants";
import Link from "next/link";

export function WorkExperienceItem({
  experience,
  index,
}: {
  experience: WorkExperience;
  index: number;
}) {
  const formatDate = (dateString: string) => {
    const [month, year] = dateString.split(" ");
    const date = new Date(`${month} 1, ${year}`);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <motion.div
      className="mb-4 pb-6"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
    >
      <h3 className="text-sm font-semibold mb-1 flex items-center gap-2">
        <RiBriefcase2Line className="text-gray-600 dark:text-gray-400 text-lg" />
        <Link href={experience.websiteLink}>
          <span className="underline underline-offset-2">
            {experience.company}
          </span>
        </Link>
      </h3>
      <div className="flex flex-col md:flex-row justify-between">
        <p className="text-gray-600 text-xs md:text-sm mb-1 dark:text-gray-300 ">
          {experience.role}
        </p>
        <p className="text-gray-500 text-xs md:text-sm mb-1 dark:text-gray-300">
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
      <div className="flex">
        <motion.a
          href={experience.websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-500 dark:text-gray-300 dark:hover:text-gray-200 hover:text-gray-500 text-xs md:text-sm"
          whileHover={{ scale: 1.03 }}
        >
          <RiExternalLinkLine className="mr-1" />
          Company Website
        </motion.a>
      </div>
    </motion.div>
  );
}
