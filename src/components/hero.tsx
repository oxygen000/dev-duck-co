"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import RotatingText from "./ui/RotatingText";

const interFont = Inter({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <section
      id="home"
      className="py-16 sm:py-20 bg-gradient-to-br from-primary/30 via-primary/20 to-secondary/30 dark:from-primary/10 dark:via-primary/5 dark:to-secondary/10"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h1 data-cursor="hover" className={`${interFont.className} text-3xl sm:text-4xl font-bold text-secondary dark:text-primary mb-4`}>
            Abdel Hamed Reda
          </h1>
          <div data-cursor="hover" className={`${interFont.className} text-lg sm:text-xl text-secondary dark:text-primary mb-6 flex`}>
            <p>Developer</p>
            <RotatingText
              texts={["Next.js", "Angular", "Express.js", "Is", "Cool!"]}
              mainClassName="px-2 sm:px-3 ml-2  bg-gradient-to-br from-primary/30 via-primary/20 to-secondary/30 dark:from-primary/10 dark:via-primary/5 dark:to-secondary/10 text-secondary dark:text-primary overflow-hidden py-0.5 sm:py-1  rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 "
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              rotationInterval={2000}
            />
          </div>
        </div>

        <div  className="md:w-1/2 flex justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full shadow-yellow-glow dark:shadow-dark-glow drop-shadow-yellow-glow dark:drop-shadow-dark-glow">
            <Image
              src="/hero.png"
              alt="Dev Duck Co Logo"
              fill
              className="rounded-full object-cover shadow-2xl hover:scale-105 transition-transform duration-300 drop-shadow-yellow-glow dark:drop-shadow-dark-glow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
