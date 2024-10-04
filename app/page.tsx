"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Project, projects } from "./utils/constants";
import { ProjectItem } from "./projects/page";

export default function Home() {
  return (
    <div className="flex flex-col w-[50%] p-5 mt-5">
      <div>
        <div className="flex w-full text-[16px] font-thin text-justify">
          Hey 👋 I’m Yug!. A developer who loves to build stuff that matters.
          Loves to scroll and learn on X.is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a
          galley.
        </div>

        {/* <div className="mt-5">
          <h2 className="text-md font-semibold mb-6">Projects</h2>
          <div>
            {projects.map((project, index) => (
              <ProjectItem key={index} project={project} index={index} />
            ))}
          </div>
        </div> */}
        <div className="mt-8">
          <h2 className="text-md font-semibold mb-6">Projects</h2>
          <div>
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
