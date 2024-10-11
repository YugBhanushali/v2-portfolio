"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import {
  RiHome4Line,
  RiBriefcase2Line,
  RiFolder2Line,
  RiBookOpenLine,
  RiLinkM,
  RiSquareLine,
  RiBallPenLine,
} from "react-icons/ri";

export default function Footer() {
  const pathname = "/" + usePathname().split("/")[1];

  console.log(pathname);

  const navItems = [
    { href: "/", icon: RiSquareLine, label: "Home" },
    { href: "/projects", icon: RiFolder2Line, label: "Projects" },
    { href: "/work", icon: RiBriefcase2Line, label: "Work" },
    { href: "/blogs", icon: RiBallPenLine, label: "Blogs" },
    { href: "/socials", icon: RiLinkM, label: "Socials" },
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
              <item.icon className="w-6 h-6 mb-1" />
              {pathname === item.href && (
                <motion.div
                  className="w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"
                  layoutId="dot"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </motion.div>
          </Link>
        ))}
      </nav>
    </footer>
  );
}
