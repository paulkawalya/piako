import type { Metadata } from "next";
import { Services } from "@/components/piako/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Piako Consult's sixteen engineering, planning and infrastructure consultancy services, from masterplanning and design to supervision and programme management.",
};

export default function ServicesPage() {
  return <Services />;
}
