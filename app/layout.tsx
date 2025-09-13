import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Owolabi Agbabiaka - Software Engineer Portfolio",
  description:
    "Professional portfolio of Owolabi Agbabiaka, a software developer specializing in React, , and modern web technologies.",
  keywords:
    "Devops, Cloud Engineer, developer, React, portfolio, web development, software engineer",
  authors: [{ name: "Owolabi Agbabiaka" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3B82F6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
