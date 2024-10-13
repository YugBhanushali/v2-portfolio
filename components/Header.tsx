"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { setTheme, theme } = useTheme();
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    setDarkMode(theme === "dark");
  }, [theme]);

  function getTimeString() {
    return (
      currentTime.getHours().toString().padStart(2, "0") +
      ":" +
      currentTime.getMinutes().toString().padStart(2, "0") +
      ":" +
      currentTime.getSeconds().toString().padStart(2, "0")
    );
  }

  function getBreadcrumbs() {
    const pathSegments = pathname
      .split("/")
      .slice(0, 2)
      .filter((segment) => segment !== "");
    let breadcrumbs = [{ name: "Yug Bhanushali", path: "/" }];

    pathSegments.forEach((segment, index) => {
      breadcrumbs.push({
        name: segment.charAt(0).toUpperCase() + segment.slice(1),
        path: "/" + pathSegments.slice(0, index + 1).join("/"),
      });
    });

    return breadcrumbs;
  }

  function truncateName(name: string, maxLength: number) {
    return name.length > maxLength ? name.slice(0, maxLength) + "..." : name;
  }

  return (
    <div className="fixed top-0  w-full sm:w-full md:w-[80%] lg:w-[50%] bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 backdrop-blur-md z-10 transition-colors duration-300">
      <header className="p-2 sm:p-4 sm:mx-0 mx-2 flex sm:flex justify-between items-center max-w-full ">
        <nav className="ml-2 sm:ml-0">
          <ul className="flex flex-wrap items-center justify-center sm:justify-start space-x-1 sm:space-x-2 text-sm sm:text-base">
            {getBreadcrumbs().map((breadcrumb, index) => (
              <li key={breadcrumb.path} className="flex items-center">
                <Link
                  href={breadcrumb.path}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {truncateName(breadcrumb.name, 14)}
                </Link>
                {index < getBreadcrumbs().length - 1 && (
                  <span className="mx-1 sm:mx-2 text-gray-400 dark:text-gray-600">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-0 sm:space-x-4">
          <button
            onClick={() => {
              setTheme(darkMode ? "light" : "dark");
              setDarkMode(!darkMode);
            }}
            className="p-2 rounded-full  transition-colors duration-300"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              // <RiSunLine className="w-4 h-4 sm:w-5 sm:h-5" />
              <FaCircle className="w-4 h-4 sm:w-4 sm:h-4 text-white" />
            ) : (
              // <RiMoonLine className="w-4 h-4 sm:w-5 sm:h-5" />
              <FaCircle className="w-4 h-4 sm:w-4 sm:h-4 text-black" />
            )}
          </button>
          <div className="text-sm sm:text-base" suppressHydrationWarning>
            {getTimeString() + " IST"}
          </div>
        </div>
      </header>
      <div className="w-full h-px bg-gray-200 dark:bg-gray-700 transition-colors duration-300"></div>
    </div>
  );
}
