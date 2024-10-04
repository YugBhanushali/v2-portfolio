"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  RiHome4Line,
  RiBriefcase2Line,
  RiFolder2Line,
  RiBookOpenLine,
} from "react-icons/ri";

const Footer = () => {
  const navItems = [
    { href: "/", icon: RiHome4Line, label: "Home" },
    { href: "/work", icon: RiBriefcase2Line, label: "Work" },
    { href: "/projects", icon: RiFolder2Line, label: "Projects" },
    { href: "/blogs", icon: RiBookOpenLine, label: "Blogs" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 backdrop-blur-md p-4">
      <nav className="flex justify-center space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-5 h-5 mb-1" />
              {/* <span className="text-xs">{item.label}</span> */}
            </motion.div>
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
