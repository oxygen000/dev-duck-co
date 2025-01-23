"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme} // استخدام الوضع الحالي كمفتاح لإعادة تحريك الصفحة
        initial={{ opacity: 0, y: 20 }} // بداية: شفافية 0 وتحريك من الأسفل بمقدار 20px
        animate={{ opacity: 1, y: 0 }} // نهاية: شفافية كاملة وعدم تحريك
        exit={{ opacity: 0, y: -20 }} // خروج: شفافية 0 وتحريك للأعلى بمقدار 20px
        transition={{ duration: 0.5, ease: "easeInOut" }} // مدة الانتقال وتأثير التسهيل
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}