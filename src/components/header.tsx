"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // إغلاق القائمة عند النقر خارجها
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
    <header className="sticky top-0 z-50 bg-primary dark:bg-secondary shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-secondary dark:text-primary">Dev Duck Co</div>
        <nav className="hidden md:flex space-x-4">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {/* القائمة المنسدلة للهواتف */}
      <div
        ref={menuRef}
        className={`md:hidden bg-primary dark:bg-secondary transition-all duration-300 ease-in-out overflow-hidden ${
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
          <NavLink href="#testimonials" onClick={() => setIsMenuOpen(false)}>
            Testimonials
          </NavLink>
          <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
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
      className="block md:inline-block px-4 py-2 text-secondary-foreground dark:text-primary-foreground hover:text-accent dark:hover:text-accent transition-colors"
      {...props}
    >
      {children}
    </a>
  );
}