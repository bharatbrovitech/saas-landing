import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nova AI | Next-Gen SaaS Platform",
  description: "Transform your workflow with Nova AI - the most advanced AI-powered SaaS platform for modern teams.",
  keywords: "SaaS, AI, automation, productivity, enterprise",
  openGraph: {
    title: "Nova AI | Next-Gen SaaS Platform",
    description: "Transform your workflow with Nova AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>{children}</body>
    </html>
  );
}
