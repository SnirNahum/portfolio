import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Snir Nahum | Full Stack Developer",
  description:
    "Portfolio of Snir Nahum - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "full stack developer",
    "portfolio",
    "react",
    "next.js",
    "web developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg-primary text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
