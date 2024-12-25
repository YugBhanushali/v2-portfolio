"use client";
import { motion } from "framer-motion";
import { skills } from "./utils/constants";
import Link from "next/link";
import { RiTwitterLine, RiArrowRightLine, RiMailLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className="flex flex-col w-full sm:w-[100%] md:w-[70%] lg:w-[50%] p-5 sm:p-2 md:p-4 lg:p-5 mt-3">
      <div>
        <div className="flex w-full text-[14px] sm:text-[16px] text-justify">
          Hey, I'm Yug a developer passionate about building impactful solutions
          that enhance convenience and add value through tech and code. When I'm
          not working on projects, you can find me tinkering on X (twitter),
          exploring the latest trends in financial tech (Fintech) and startups.
          I'm dedicated to build products that make a difference.
        </div>

        <div className="flex items-center w-full text-[14px] sm:text-[16px] mt-4">
          <RiArrowRightLine className="mx-2" />
          By the way, I'm open to projects and work.
          <RiArrowRightLine className="mx-2" />
          <Link
            href="mailto:yug.h.bhanushali1@gmail.com"
            className="hover:text-blue-500 transition-colors"
          >
            <RiMailLine className="inline-block w-4 h-4" />
          </Link>
          <p className="mx-2">/</p>
          <Link
            href="https://twitter.com/TheYug03"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <RiTwitterLine className="inline-block w-5 h-5" />
          </Link>
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
                className="text-xs border border-gray-500 px-2 py-1 transition-colors duration-200"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
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
