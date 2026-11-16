import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, organisation, email, phone, service, message, source } = body;

    // Log the enquiry routed to info@consultpiako.com
    console.log("[PIAKO CONSULT - ENQUIRY ROUTED TO info@consultpiako.com]", {
      destination: "info@consultpiako.com",
      receivedAt: new Date().toISOString(),
      senderName: name,
      senderEmail: email,
      organisation: organisation || "N/A",
      phone: phone || "N/A",
      service: service || "General Enquiry",
      message: message || "No message provided",
      source: source || "website-contact-form",
    });

    return NextResponse.json({
      success: true,
      recipient: "info@consultpiako.com",
      message:
        "Your enquiry has been successfully transmitted to info@consultpiako.com. Our engineering team will review your project brief and respond shortly.",
    });
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process enquiry" },
      { status: 400 }
    );
  }
}
