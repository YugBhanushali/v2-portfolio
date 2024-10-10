"use client";

import React from "react";
import { motion } from "framer-motion";

import { Metadata } from "next";
import { SocialLink, socialLinks } from "../utils/constants";
import { RiExternalLinkLine } from "react-icons/ri";

export const metadata: Metadata = {
  title: "Socials - Yug Bhanushali",
  description: "Connect with me on my social media platforms.",
  openGraph: {
    title: "Socials - Yug Bhanushali",
    description: "Connect with me on my social media platforms.",
    url: "https://yugbhanushali.com/socials",
  },
};

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
      {/* <p className="text-gray-500 text-xsm mb-2 dark:text-gray-400 text-sm">
        Connect with me on {link.name}
      </p> */}
      <div className="flex gap-4">
        <motion.a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-400 hover:text-gray-300"
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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
        {socialLinks.map((link, index) => (
          <SocialLinkItem key={index} link={link} index={index} />
        ))}
      </div>
    </main>
  );
}
