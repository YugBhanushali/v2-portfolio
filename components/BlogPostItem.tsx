"use client"; // Mark this as a client component

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  RiCalendarLine,
  RiTimeLine,
  RiUser3Line,
  RiBookOpenLine,
} from "react-icons/ri";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  tags: string[];
  publishedDate: string;
  readTime: string;
  author: string;
  link: string;
}

const BlogPostItem: React.FC<{ post: BlogPost; index: number }> = ({
  post,
  index,
}) => {
  return (
    <motion.div
      className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ x: 5 }}
    >
      <Link href={post.link} className="block group">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          <RiBookOpenLine className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
          <span>{post.title}</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
          {post.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 items-center text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <RiCalendarLine className="mr-1" />
            <span>{post.publishedDate}</span>
          </div>
          <div className="flex items-center">
            <RiTimeLine className="mr-1" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center">
            <RiUser3Line className="mr-1" />
            <span>{post.author}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogPostItem;
