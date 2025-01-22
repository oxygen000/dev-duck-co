"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const fullText = "Building Seamless Fullstack Solutions with Next.js, AngularJS, MongoDB & Express";

  useEffect(() => {
    const handleType = () => {
      const currentText = fullText.substring(0, text.length);

      if (!isDeleting) {
        // الكتابة
        setText(currentText + fullText.charAt(text.length));
        if (text.length === fullText.length) {
          // الانتظار بعد الانتهاء من الكتابة
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // المسح
        setText(currentText.substring(0, text.length - 1));
        if (text.length === 0) {
          // الانتظار بعد الانتهاء من المسح
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }

      // تحديد سرعة الكتابة/المسح
      setTypingSpeed(isDeleting ? 75 : 150);
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, fullText, typingSpeed]);

  return (
    <section
      id="home"
      className="py-20 bg-gradient-to-br from-primary/30 via-primary/20 to-secondary/30 dark:from-primary/10 dark:via-primary/5 dark:to-secondary/10"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* النصوص */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary dark:text-primary mb-6">
            Dev Duck Co
          </h1>
          <p className="text-xl md:text-2xl text-secondary dark:text-primary mb-8">
            {text}
            <span className="ml-1 animate-blink">|</span> {/* مؤشر الكتابة */}
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Dive Into Our Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* الصورة */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/hero.png"
              alt="Dev Duck Co Logo"
              fill
              className="rounded-full border-4 border-secondary dark:border-primary object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}