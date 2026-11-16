import type { Metadata } from "next";
import { Industries } from "@/components/piako/industries";

export const metadata: Metadata = {
  title: "Industries & Sectors Served",
  description:
    "Explore Piako Consult Ltd's engineering solutions across government ministries, development partners, referral hospitals, water utilities, academic campuses, and EPC contractor consortia.",
};

export default function IndustriesPage() {
  return <Industries />;
}
