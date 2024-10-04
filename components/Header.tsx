"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

const Header = () => {
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

  function getBreadcrumb() {
    const pathSegments = pathname
      .split("/")
      .filter((segment) => segment !== "");
    if (pathSegments.length === 0) return "Home";
    return pathSegments
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(" / ");
  }

  return (
    <div className={`flex w-[50%] flex-col transition-colors duration-300`}>
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-md">Yug Bhanushali / {getBreadcrumb()}</h1>
        <div className="flex items-center space-x-4">
          <div className="text-md" suppressHydrationWarning>
            {getTimeString() + " IST"}
          </div>
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
        </div>
      </header>
      <div className="w-full h-px bg-gray-200 dark:bg-gray-700 transition-colors duration-300"></div>
    </div>
  );
};

export default Header;
