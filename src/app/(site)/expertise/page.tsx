import type { Metadata } from "next";
import { Expertise } from "@/components/piako/expertise";

export const metadata: Metadata = {
  title: "Our Expertise",
  description:
    "Discover the disciplines, tools, registrations and delivery approach that make Piako Consult a trusted engineering partner.",
};

export default function ExpertisePage() {
  return <Expertise />;
}
