"use client";
import { Inter } from "next/font/google";
import RotatingText from "./ui/RotatingText";
import Orb from "./ui/Orb";
import "./hero.css";

const interFont = Inter({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <section
      id="home"
      className="py-12 sm:py-16 bg-gradient-to-br from-primary/30 via-primary/20 to-secondary/30 dark:from-primary/10 dark:via-primary/5 dark:to-secondary/10"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1
            data-cursor="hover"
            className={`${interFont.className} text-2xl sm:text-3xl md:text-4xl font-bold text-secondary dark:text-primary mb-3 sm:mb-4`}
          >
            Abdel Hamed Reda 
          </h1>
          <h2 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium mb-3">
            Passionate Full-Stack Developer 
          </h2>
          <div
            data-cursor="hover"
            className={`${interFont.className} text-base sm:text-lg md:text-xl text-secondary dark:text-primary flex justify-center md:justify-start items-center`}
          >
            <p>Developer in</p>
            <RotatingText
              texts={[
                "Next.js",
                "Angular",
                "Express.js",
                "MongoDB",
                "TypeScript",
              ]}
              mainClassName="px-2 sm:px-3 ml-2 bg-gradient-to-br from-primary/30 via-primary/20 to-secondary/30 dark:from-primary/10 dark:via-primary/5 dark:to-secondary/10 text-secondary dark:text-primary overflow-hidden py-0.5 sm:py-1 rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              staggerDuration={0.05}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              rotationInterval={2500}
            />
          </div>
          <p
            data-cursor="hover"
            className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400"
          >
            I build scalable and high-performance web applications using modern
            technologies. With expertise in frontend and backend development, I
            ensure seamless user experiences and efficient backend
            architectures.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <div className="relative flex w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full drop-shadow-yellow-glow dark:drop-shadow-dark-glow">
            <div className="Orb absolute inset-0 flex items-center justify-center">
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
