"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const additionalSkills = [
  {
    title: "DevOps",
    description:
      "Experienced in CI/CD pipelines, Docker, Kubernetes, and cloud platforms like AWS and Azure.",
    icon: "🚀", // يمكن استبدالها بأيقونة أو صورة
    color: "text-blue-500", // لون مميز للأيقونة
  },
  {
    title: "Database Management",
    description:
      "Proficient in designing and managing relational (MySQL, PostgreSQL) and NoSQL (MongoDB) databases.",
    icon: "🗄️", // يمكن استبدالها بأيقونة أو صورة
    color: "text-green-500", // لون مميز للأيقونة
  },
  {
    title: "API Development",
    description:
      "Skilled in building RESTful and GraphQL APIs with proper documentation and versioning.",
    icon: "🔗", // يمكن استبدالها بأيقونة أو صورة
    color: "text-purple-500", // لون مميز للأيقونة
  },
  {
    title: "Testing & Debugging",
    description:
      "Expertise in unit testing, integration testing, and debugging tools for both frontend and backend.",
    icon: "🐛", // يمكن استبدالها بأيقونة أو صورة
    color: "text-red-500", // لون مميز للأيقونة
  },
  {
    title: "UI/UX Design",
    description:
      "Strong understanding of design principles and tools like Figma, Adobe XD, and responsive design.",
    icon: "🎨", // يمكن استبدالها بأيقونة أو صورة
    color: "text-yellow-500", // لون مميز للأيقونة
  },
  {
    title: "Agile Methodology",
    description:
      "Experienced in Agile practices, including Scrum and Kanban, for efficient project management.",
    icon: "📅", // يمكن استبدالها بأيقونة أو صورة
    color: "text-indigo-500", // لون مميز للأيقونة
  },
];

export default function AdditionalSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="testimonials" className="py-20 bg-primary/10 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-primary mb-12 text-center">
          Additional Skills
        </h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-background-light dark:bg-background-dark hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`text-4xl ${skill.color}`}>{skill.icon}</div>
                    <CardTitle className="text-xl font-semibold text-secondary dark:text-primary">
                      {skill.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary/80 dark:text-primary/80">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}