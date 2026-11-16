import type { Metadata } from "next";
import { About } from "@/components/piako/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Piako Consult Ltd — our vision, mission, core values and the multidisciplinary team delivering engineering and infrastructure projects across Africa.",
};

export default function AboutPage() {
  return <About />;
}
