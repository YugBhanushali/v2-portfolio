"use client";
import { RiExternalLinkLine, RiFolder2Line } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";
import { Project } from "@/app/utils/constants";

export function ProjectItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      className="mb-4 pb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ x: 5 }}
    >
      <h3 className="text-sm font-semibold mb-0 flex items-center gap-2">
        <RiFolder2Line className="text-gray-600 dark:text-gray-400 text-lg" />
        <span className="underline underline-offset-2">{project.title}</span>
      </h3>
      <p className="text-gray-500 text-xs md:text-sm mb-2 dark:text-gray-400">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1 mb-3">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs border border-gray-500 px-2 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <motion.a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-400 hover:text-gray-500"
          whileHover={{ scale: 1.1 }}
        >
          <RiExternalLinkLine />
        </motion.a>
        <motion.a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-400 hover:text-gray-500"
          whileHover={{ scale: 1.1 }}
        >
          <TbBrandGithub />
        </motion.a>
      </div>
    </motion.div>
  );
}
