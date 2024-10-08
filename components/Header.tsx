"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

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

  return (
    <div className="fixed top-0 flex-col w-[50%] bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 backdrop-blur-md z-10 transition-colors duration-300">
      <header className="p-4 flex justify-between items-center max-w-4xl mx-auto">
        <nav>
          <ul className="flex space-x-2 text-sm md:text-base">
            {getBreadcrumbs().map((breadcrumb, index) => (
              <li key={breadcrumb.path}>
                <Link
                  href={breadcrumb.path}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {breadcrumb.name}
                </Link>
                {index < getBreadcrumbs().length - 1 && (
                  <span className="mx-2 text-gray-400 dark:text-gray-600">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              setTheme(darkMode ? "light" : "dark");
              setDarkMode(!darkMode);
            }}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <RiSunLine className="w-5 h-5" />
            ) : (
              <RiMoonLine className="w-5 h-5" />
            )}
          </button>
          <div className="text-sm md:text-base" suppressHydrationWarning>
            {getTimeString() + " IST"}
          </div>
        </div>
      </header>
      <div className="w-full h-px bg-gray-200 dark:bg-gray-700 transition-colors duration-300"></div>
    </div>
  );
}
