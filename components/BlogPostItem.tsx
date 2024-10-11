"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  RiBookOpenLine,
  RiCalendarLine,
  RiTimeLine,
  RiUser3Line,
} from "react-icons/ri";

interface BlogPost {
  link: string;
  title: string;
  description: string;
  tags: string[];
  publishedDate: string;
  readTime: string;
  author: string;
}

export default function BlogPostItem({
  post,
  index,
}: {
  post: BlogPost;
  index: number;
}) {
  return (
    <motion.div
      className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0 sm:mb-8 sm:pb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ x: 5 }}
    >
      <Link href={post.link} className="block group">
        <h3 className="text-base sm:text-lg font-semibold mb-2 flex items-center gap-2 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          <RiBookOpenLine
            className="text-gray-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 text-2xl sm:text-lg"
            aria-hidden="true"
          />
          <span>{post.title}</span>
        </h3>
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-3">
          {post.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {post.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="text-xs border border-gray-500 px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2 sm:gap-6  text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <RiCalendarLine
              className="mr-1 text-sm sm:text-sm"
              aria-hidden="true"
            />
            <span>{post.publishedDate}</span>
          </div>
          <div className="flex items-center">
            <RiTimeLine
              className="mr-1 text-sm sm:text-sm"
              aria-hidden="true"
            />
            <span>{post.readTime}</span>
          </div>
          {/* <div className="flex items-center">
            <RiUser3Line
              className="mr-1 text-sm sm:text-sm"
              aria-hidden="true"
            />
            <span>{post.author}</span>
          </div> */}
        </div>
      </Link>
    </motion.div>
  );
}
