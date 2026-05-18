import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juan Cruz Ana — Portfolio",
  description:
    "Software Development student at UTN Mendoza and Data Scientist. Specializing in scalable web applications and workflow automation.",
  keywords: ["Next.js", "TypeScript", "React", "FastAPI", "Data Science", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
