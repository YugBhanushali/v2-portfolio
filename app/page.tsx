"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Project, projects } from "./utils/constants";
import { ProjectItem } from "@/components/ProjectItem";

export default function Home() {
  return (
    <div className="flex flex-col w-full sm:w-[100%] md:w-[70%] lg:w-[50%] p-5 sm:p-2 md:p-4 lg:p-5 mt-3">
      <div>
        <div className="flex w-full text-[14px] sm:text-[16px] text-justify">
          Hey 👋 I’m Yug!. A developer who loves to build stuff that matters.
          Loves to scroll and learn on X.is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a
          galley.
        </div>

        {/* Projects section */}
        <div className="mt-8">
          <h2 className="text-md font-semibold mb-6">Projects</h2>
          <div className="grid grid-cols-1 lg:flex lg:flex-col sm:grid-cols-2 gap-4">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectItem key={index} project={project} index={index} />
            ))}
          </div>
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/projects"
              className="text-sm text-gray-400 hover:text-gray-200 underline underline-offset-2"
            >
              See more projects
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
