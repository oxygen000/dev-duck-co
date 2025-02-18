"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.header
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-50 bg-white dark:bg-background-dark shadow-md"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary dark:text-secondary">
            <Link href="/">Abdel Hamed Reda</Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary dark:text-secondary hover:bg-primary/10 dark:hover:bg-secondary/10"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary dark:text-secondary hover:bg-primary/10 dark:hover:bg-secondary/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        <div
          ref={menuRef}
          className={`md:hidden bg-white dark:bg-background-dark transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="px-4 py-2">
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
        </div>
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
      className="block md:inline-block px-4 py-2 text-primary dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors"
      {...props}
    >
      {children}
    </a>
  );
}
