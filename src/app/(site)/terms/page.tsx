import type { Metadata } from "next";
import { LegalPage } from "@/components/piako/legal-page";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing the use of the Piako Consult Ltd website and the information published on it.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      updated="March 2025"
      intro="These terms govern your use of the Piako Consult Ltd website. By using the site, you agree to the terms set out below."
      sections={[
        {
          heading: "Website content",
          paragraphs: [
            "The content on this website is provided for general information about Piako Consult Ltd and our services. Project descriptions, statistics and capability summaries are illustrative and do not constitute a professional offer or guarantee of results.",
            "We take care to keep information accurate and current, but we do not warrant that every page is complete, error-free or up to date at all times.",
          ],
        },
        {
          heading: "Professional services",
          paragraphs: [
            "Any engineering, planning or consultancy engagement is governed by a separate written agreement, including the agreed scope, fees, deliverables and professional responsibilities. Nothing on this website creates a client relationship or replaces formal technical advice for a specific project.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "Unless otherwise stated, the text, design, graphics, logos and images on this website are owned by or licensed to Piako Consult Ltd. You may view and print pages for personal, non-commercial use, but you may not reproduce, modify or redistribute our content without written permission.",
          ],
        },
        {
          heading: "Acceptable use",
          paragraphs: [
            "You must not use this website in a way that is unlawful, disruptive or harmful, attempt to gain unauthorised access to our systems, or submit false or misleading information through our forms.",
          ],
        },
        {
          heading: "Links and liability",
          paragraphs: [
            "This website may link to third-party sites whose content we do not control. We are not responsible for those sites or their practices.",
            "To the extent permitted by law, Piako Consult Ltd is not liable for indirect or consequential loss arising from reliance on the general information published here.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of Uganda. Any dispute relating to this website is subject to the exclusive jurisdiction of the courts of Uganda.",
          ],
        },
      ]}
    />
  );
}
