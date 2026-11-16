import type { Metadata } from "next";
import { Geist_Mono, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displayFont = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Piako Consult Ltd — Engineering. Infrastructure. Development.",
    template: "%s — Piako Consult Ltd",
  },
  description:
    "Piako Consult Ltd is a multidisciplinary engineering and infrastructure consultancy delivering integrated planning, design, surveying, engineering and project management solutions across Uganda, Malawi and Nigeria.",
  keywords: [
    "Piako Consult",
    "engineering consultancy",
    "infrastructure development",
    "water and sanitation",
    "healthcare infrastructure",
    "construction supervision",
    "Africa engineering",
    "Uganda engineering",
    "Malawi engineering",
    "Nigeria engineering",
  ],
  authors: [{ name: "Piako Consult Ltd" }],
  icons: {
    icon: "/logopiako.png",
    apple: "/logopiako.png",
  },
  openGraph: {
    title: "Piako Consult Ltd — Engineering. Infrastructure. Development.",
    description:
      "Integrated engineering, planning and infrastructure consultancy transforming development ambitions into sustainable outcomes across Africa.",
    siteName: "Piako Consult Ltd",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piako Consult Ltd",
    description: "Engineering. Infrastructure. Development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable} antialiased bg-background text-foreground`}
      >
        <MotionConfig reducedMotion="user">
          {children}
          <Toaster />
        </MotionConfig>
      </body>
    </html>
  );
}
