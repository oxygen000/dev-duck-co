"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Image from "next/image";
import Footer from "@/components/footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // محاكاة فترة تحميل لمدة 2 ثانية
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // تنظيف المؤقت عند إلغاء التحميل
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark">
      {isLoading ? (
        // شاشة التحميل
        <div className="fixed inset-0 flex items-center justify-center bg-background-light dark:bg-background-dark z-50">
          <div className="animate-pulse">
            <Image
              src="/loading.png" // استبدل بمسار صورتك في مجلد public
              alt="Loading"
              width={250} // عرض الصورة
              height={250} // ارتفاع الصورة
              className="rounded-full" // يمكنك تعديل التنسيق حسب الحاجة
            />
          </div>
        </div>
      ) : (
        // المحتوى الرئيسي
        <>
          <Header />
          <Hero />
          <Skills />
          <Projects />
          <Footer/>
        </>
      )}
    </main>
  );
}