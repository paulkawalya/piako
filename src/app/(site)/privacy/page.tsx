import type { Metadata } from "next";
import { LegalPage } from "@/components/piako/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Piako Consult Ltd collects, uses and protects personal information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="March 2025"
      intro="This policy explains what information Piako Consult Ltd collects through this website, why we collect it and how we protect it."
      sections={[
        {
          heading: "Information we collect",
          paragraphs: [
            "We collect the information you choose to provide when you contact us, request a consultation or apply for a role. This may include your name, organisation, email address, telephone number, project details and any documents you attach.",
            "Our web hosting provider may also record standard technical information such as browser type, device type, referring pages and approximate location for security and performance monitoring.",
          ],
        },
        {
          heading: "How we use information",
          paragraphs: [
            "We use your information to respond to enquiries, prepare proposals, deliver consultancy services, process job applications and maintain business records. We do not sell personal information.",
            "Where we rely on consent, you may withdraw it at any time by contacting us. Where we process information to perform a contract or meet a legal obligation, we retain it only for as long as necessary.",
          ],
        },
        {
          heading: "Cookies and analytics",
          paragraphs: [
            "This website may use essential cookies required for it to function and may use privacy-respecting analytics to understand how visitors use the site. You can control cookies through your browser settings.",
          ],
        },
        {
          heading: "Sharing and retention",
          paragraphs: [
            "We may share information with trusted service providers who support our operations, such as hosting, email and document management providers, and with professional advisers where required. We require those parties to protect the information they handle.",
            "We retain enquiry and project records for the period needed to manage our relationship and meet legal, tax and professional obligations.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "You may ask us to access, correct or delete the personal information we hold about you, or to restrict how it is used. To make a request, contact us using the details on the contact page. We may need to verify your identity before responding.",
          ],
        },
      ]}
    />
  );
}
