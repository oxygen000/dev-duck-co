"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Github, Instagram } from "lucide-react";
import { Press_Start_2P } from "next/font/google";

const pixelFont = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  const { theme } = useTheme();

  return (
    <motion.footer
      key={theme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-white dark:bg-background-dark shadow-md py-8 mt-10 border-t border-gray-200 dark:border-gray-700 ${pixelFont.className}`}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl text-primary dark:text-secondary">Abdel Hamed Reda</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Full-Stack Developer | Passionate about Web Technologies</p>
        </div>
        <nav className="flex space-x-6 text-sm">
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#skills">Skills</FooterLink>
          <FooterLink href="#projects">Projects</FooterLink>
        </nav>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <SocialIcon href="https://www.instagram.com/abdel_hamed" icon={<Instagram />} />
          <SocialIcon href="https://www.linkedin.com/in/oxygen000/" icon={<Linkedin />} />
          <SocialIcon href="https://github.com/oxygen000" icon={<Github />} />
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">© {new Date().getFullYear()} Abdel Hamed Reda. All rights reserved.</div>
    </motion.footer>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-600 cursor-none dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors"
    >
      {children}
    </Link>
  );
}

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

function SocialIcon({ href, icon }: SocialIconProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="text-primary cursor-none dark:text-secondary hover:text-accent dark:hover:text-accent transition-colors">
      {icon}
    </Link>
  );
}
