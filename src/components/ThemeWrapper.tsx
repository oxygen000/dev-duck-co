"use client";

import { useTheme } from "next-themes";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <div
      className={`theme-wrapper ${theme === "dark" ? "dark" : ""}`}
      style={{
        transition: "background-color 0.3s ease, opacity 0.3s ease", 
        opacity: theme === "dark" ? 1 : 0.95, 
      }}
    >
      {children}
    </div>
  );
}
