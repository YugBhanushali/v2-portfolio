"use client";
import { motion } from "framer-motion";
import { skills } from "./utils/constants";

export default function Home() {
  return (
    <div className="flex flex-col w-full sm:w-[100%] md:w-[70%] lg:w-[50%] p-5 sm:p-2 md:p-4 lg:p-5 mt-3">
      <div>
        <div className="flex w-full text-[14px] sm:text-[16px] text-justify">
          Hey, I’m Yug a developer passionate about building impactful solutions
          that enhance convenience and add value through tech and code. When I’m
          not working on projects, you can find me tinkering on X (twitter),
          exploring the latest trends in financial tech (Fintech) and startups.
          I’m dedicated to build products that make a difference.
        </div>

        {/* Skills section */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-md font-semibold mb-6">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-1">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="text-xs border border-gray-500 px-2 py-1  transition-colors duration-200"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
