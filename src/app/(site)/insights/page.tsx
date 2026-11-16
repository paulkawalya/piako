import type { Metadata } from "next";
import { Insights } from "@/components/piako/insights";

export const metadata: Metadata = {
  title: "Engineering Insights & Field Reports",
  description:
    "Authoritative technical articles and case studies on African hospital engineering, water distribution schemes, FIDIC contract administration, and geotechnical borehole drilling from Piako Consult Ltd.",
};

export default function InsightsPage() {
  return <Insights />;
}
