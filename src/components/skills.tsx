"use client";

import React from "react";
import Image from "next/image";

const skills = [
  {
    name: "Frontend Development",
    image: "/skills/react.svg", // مسار الملف في مجلد public
  },
  {
    name: "Backend Development",
    image: "/skills/typescript.svg", // مسار الملف في مجلد public
  },
  {
    name: "Fullstack Integration",
    image: "/skills/tailwindcss.svg", // مسار الملف في مجلد public
  },
  {
    name: "Cloud Deployment",
    image: "/skills/sass.svg", // مسار الملف في مجلد public
  },
  {
    name: "Cloud Deployment",
    image: "/skills/pnpm.svg", // مسار الملف في مجلد public
  },
  {
    name: "Cloud Deployment",
    image: "/skills/nodejs.svg", // مسار الملف في مجلد public
  },
  {
    name: "Cloud Deployment",
    image: "/skills/nextjs.svg", // مسار الملف في مجلد public
  },
  {
    name: "Cloud Deployment",
    image: "/skills/mongodb.svg", // مسار الملف في مجلد public
  },
  {
    name: "Cloud Deployment",
    image: "/skills/materialui.svg", // مسار الملف في مجلد public
  },
  {
    name: "Cloud Deployment",
    image: "/skills/javascript.svg", // مسار الملف في مجلد public
  },
  {
    name: "Cloud Deployment",
    image: "/skills/express.svg", // مسار الملف في مجلد public
  },
  {
    name: "Cloud Deployment",
    image: "/skills/angular.svg", // مسار الملف في مجلد public
  },
  {
    name: "Cloud Deployment",
    image: "/skills/bun.svg", // مسار الملف في مجلد public
  },
];

export default function Skills() {
  // تكرار الصور مرتين لإنشاء تأثير لا نهائي
  const repeatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-primary mb-12 text-center">
        Skills
        </h2>
        <div className="relative overflow-hidden">
          {/* تأثير التدرج في البداية والنهاية */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10"></div>

          {/* شريط التمرير */}
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