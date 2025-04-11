import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeWrapper from "@/components/ThemeWrapper"; // استيراد المكون العميل

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abdel Hamed Reda - Fullstack Web Development",
  description:
    "Building Seamless Fullstack Solutions with Next.js, AngularJS, MongoDB & Express",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background-light dark:bg-background-dark`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeWrapper>{children}</ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
