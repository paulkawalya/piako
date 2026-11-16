import type { Metadata } from "next";
import { Careers } from "@/components/piako/careers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build Africa's infrastructure and your career with Piako Consult. Explore open engineering roles, graduate opportunities and internship programmes.",
};

export default function CareersPage() {
  return <Careers />;
}
