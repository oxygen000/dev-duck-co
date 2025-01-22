"use client";

import { Code, Database, Globe, Cloud } from "lucide-react";
import React from "react";

const skills = [
  {
    name: "Frontend Development",
    icon: Globe,
  },
  {
    name: "Backend Development",
    icon: Database,
  },
  {
    name: "Fullstack Integration",
    icon: Code,
  },
  {
    name: "Cloud Deployment",
    icon: Cloud,
  },
];

export default function Skills() {
  // تكرار الأيقونات عدة مرات لإنشاء تأثير لا نهائي
  const repeatedSkills = Array(5).fill(skills).flat();

  return (
    <section id="skills" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-primary mb-12 text-center">
          Our Quackabilities
        </h2>
        <div className="relative overflow-hidden">
          {/* شريط التمرير */}
          <div className="flex animate-marquee whitespace-nowrap">
            {repeatedSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-primary/10 dark:bg-secondary/10 p-6 rounded-lg mx-4 flex-shrink-0 w-24 h-24 flex items-center justify-center"
              >
                <skill.icon className="h-12 w-12 text-accent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}