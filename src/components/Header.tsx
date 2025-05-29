"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 px-8 sm:px-14">
        <div className="py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/#home"
              className="text-lg sm:text-2xl font-bold text-red-600 dark:text-red-500"
            >
              &lt;WardKhaddour /&gt;
            </Link>

            <nav className="hidden md:flex items-center justify-between gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <ThemeToggle />
            </nav>

            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={toggleSidebar}
                className="text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                aria-label="Toggle menu"
              >
                {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition-all duration-300 ease-in-out ${
          isSidebarOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 dark:bg-black/70"
          onClick={toggleSidebar}
        />

        {/* Sidebar Content */}
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-end mb-8">
              <button
                onClick={toggleSidebar}
                className="text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                aria-label="Close menu"
              >
                <FiX size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={toggleSidebar}
                  className="text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-500 transition-colors text-lg"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
