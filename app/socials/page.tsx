"use client";

import React from "react";
import { motion } from "framer-motion";
import { SocialLink, socialLinks } from "../utils/constants";
import { RiExternalLinkLine } from "react-icons/ri";

function SocialLinkItem({ link, index }: { link: SocialLink; index: number }) {
  return (
    <motion.div
      className="flex space-x-2 mb-2 pb-8 items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ x: 5 }}
    >
      <h3 className="text-sm font-semibold mb-0 flex items-center gap-2">
        <link.icon className="text-gray-600 dark:text-gray-400 text-lg" />
        <span className="">{link.name}</span>
      </h3>
      <div className="flex gap-4">
        <motion.a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-400 hover:text-gray-500"
          whileHover={{ scale: 1.1 }}
        >
          <RiExternalLinkLine />
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function SocialLinks() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] p-5 mt-4">
      <div className="sm:grid gap-4 flex flex-col sm:justify-center sm:items-centers items-center justify-center md:grid-cols-2 lg:grid-cols-3 w-full">
        {socialLinks.map((link, index) => (
          <SocialLinkItem key={index} link={link} index={index} />
        ))}
      </div>
    </main>
  );
}
