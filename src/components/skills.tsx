"use client";

import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const interFont = Inter({ subsets: ["latin"], weight: "400" });

const skills = [
  {
    name: "react",
    image: "/skills/react.svg", 
  },
  {
    name: "typescript",
    image: "/skills/typescript.svg",
  },
  {
    name: "tailwindcss",
    image: "/skills/tailwindcss.svg", 
  },
  {
    name: "sass",
    image: "/skills/sass.svg", 
  },
  {
    name: "pnpm",
    image: "/skills/pnpm.svg", 
  },
  {
    name: "nodejs",
    image: "/skills/nodejs.svg", 
  },
  {
    name: "nextjs",
    image: "/skills/nextjs.svg", 
  },
  {
    name: "mongodb",
    image: "/skills/mongodb.svg", 
  },
  {
    name: "materialui",
    image: "/skills/materialui.svg",
  },
  {
    name: "javascript",
    image: "/skills/javascript.svg", 
  },
  {
    name: "express",
    image: "/skills/express.svg",
  },
  {
    name: "angular",
    image: "/skills/angular.svg", 
  },
  {
    name: "bun",
    image: "/skills/bun.svg", 
  },
];

export default function Skills() {
  const repeatedSkills = [...skills, ...skills, ...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-20 bg-background-light dark:bg-background-dark">
      <div data-cursor="hover" className="container mx-auto px-4">
        <h2  className={`${interFont.className} text-3xl md:text-3xl font-bold text-secondary dark:text-primary mb-12 text-center`}>
        Skills
        </h2>
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10"></div>
          <div className="flex animate-marquee whitespace-nowrap">
            {repeatedSkills.map((skill, index) => (
              <div
              key={index}
              className="bg-primary/10 dark:bg-secondary/10 p-6 rounded-lg mx-4 flex-shrink-0 w-24 h-24 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={96}
                height={96}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}