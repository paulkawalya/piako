import type { Metadata } from "next";
import { Projects } from "@/components/piako/projects";

export const metadata: Metadata = {
  title: "Projects Portfolio",
  description:
    "Explore Piako Consult Ltd's infrastructure project portfolio across Uganda, Malawi, Nigeria, and South Sudan — spanning tertiary healthcare, urban water supply schemes, geotechnical investigations, and masterplanning.",
};

export default function ProjectsPage() {
  return <Projects />;
}
