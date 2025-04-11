"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Inter } from "next/font/google";
import Moon from "./icons/moon";
import Sun from "./icons/sun";

const interFont = Inter({ subsets: ["latin"], weight: "400" });

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () => {
    setIsLoading(true);
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    window.dispatchEvent(new Event("storage"));

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.header
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`bg-background-light dark:bg-background-dark shadow-md border-b border-gray-200 dark:border-gray-700 ${interFont.className}`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold text-primary dark:text-secondary">
            <Link data-cursor="hover" className="cursor-none" href="/">
              Abdel Hamed Reda
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6 font-bold">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary cursor-none dark:text-secondary hover:bg-primary/10 dark:hover:bg-secondary/10"
              onClick={toggleTheme}
            >
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </motion.div>
                ) : theme === "dark" ? (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon data-cursor="hover"  />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun data-cursor="hover"  />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary dark:text-secondary hover:bg-primary/10 dark:hover:bg-secondary/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white dark:bg-background-dark shadow-lg border-t border-gray-300 dark:border-gray-700"
            >
              <nav className="px-6 py-4 space-y-2">
                <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>
                  Home
                </NavLink>
                <NavLink href="#skills" onClick={() => setIsMenuOpen(false)}>
                  Skills
                </NavLink>
                <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>
                  Projects
                </NavLink>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children, ...props }: NavLinkProps) {
  return (
    <a
      href={href}
      className="block md:inline-block px-4 py-2 text-lg md:text-base text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors transform ease-in duration-500 cursor-none"
      {...props}
      data-cursor="hover"
    >
      {children}
    </a>
  );
}
