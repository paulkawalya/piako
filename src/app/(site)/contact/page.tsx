import type { Metadata } from "next";
import { Contact } from "@/components/piako/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a consultation or submit a project enquiry to Piako Consult Ltd in Kampala, Uganda.",
};

export default function ContactPage() {
  return <Contact />;
}
