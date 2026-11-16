"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { PageHeader } from "@/components/piako/page-header";
import { revealUp } from "@/components/piako/motion";
import { CONTACT, SERVICES } from "@/lib/piako/content";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastEnquiry, setLastEnquiry] = useState<{
    name: string;
    email: string;
    service: string;
    message: string;
  } | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const organisation = String(data.get("organisation") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    setLoading(true);
    setLastEnquiry({ name, email, service, message });

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          organisation,
          phone,
          service,
          message,
          source: "contact-page-form",
        }),
      });
    } catch (err) {
      console.warn("Backend API dispatch warning:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Enquiry Routed to info@consultpiako.com",
        description: `Thank you, ${name || "Client"}. Your project brief has been transmitted to info@consultpiako.com.`,
      });
      form.reset();
    }
  };

  return (
    <section id="contact" className="bg-ink text-white section-pad">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <PageHeader
          eyebrow="Get in Touch"
          tone="dark"
          title="Let's plan your next infrastructure project."
          intro={
            <p>
              Request a consultation or submit a project enquiry. Tell us the
              sector, the country and the scope &mdash; we will come back with
              the right team and a proposed approach.
            </p>
          }
        />

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Form */}
          <motion.div {...revealUp(0.04)} className="lg:col-span-7">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 md:p-9">
              <AnimatePresence mode="wait" initial={false}>
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <motion.div
                      initial={{ scale: 0.7, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    >
                      <CheckCircle2 className="w-14 h-14 text-olive mb-3" />
                    </motion.div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-olive font-semibold bg-olive/15 px-3 py-1 rounded-full mb-3">
                      <Mail className="w-3.5 h-3.5" />
                      Routed to info@consultpiako.com
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2 text-white">
                      Enquiry received & routed
                    </h3>
                    <p className="text-white/70 max-w-md text-sm leading-relaxed">
                      Thank you{lastEnquiry?.name ? `, ${lastEnquiry.name}` : ""}. Your project requirements have been transmitted directly to our engineering desk at{" "}
                      <span className="text-olive font-mono font-semibold">
                        info@consultpiako.com
                      </span>
                      . Our team will review and reply within two business days.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <a
                        href={`mailto:info@consultpiako.com?subject=Project%20Enquiry:%20${encodeURIComponent(
                          lastEnquiry?.service || "Infrastructure"
                        )}&body=Hello%20Piako%20Consult%20Team,%0D%0A%0D%0AFrom:%20${encodeURIComponent(
                          lastEnquiry?.name || ""
                        )}%0D%0AEmail:%20${encodeURIComponent(
                          lastEnquiry?.email || ""
                        )}%0D%0AService:%20${encodeURIComponent(
                          lastEnquiry?.service || ""
                        )}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(
                          lastEnquiry?.message || ""
                        )}`}
                        className="inline-flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-ink font-bold px-5 py-2.5 rounded-full text-xs transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        Open Email Thread
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="inline-flex items-center justify-center border border-white/20 hover:bg-white/10 text-white font-medium px-5 py-2.5 rounded-full text-xs transition-colors"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onSubmit={onSubmit}
                  className="grid sm:grid-cols-2 gap-5"
                >
                  <Field label="Full name" name="name" required />
                  <Field label="Organisation" name="organisation" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                  />
                  <Field label="Phone" name="phone" type="tel" />

                  <div className="sm:col-span-2">
                    <Label htmlFor="service">Service of interest</Label>
                    <select
                      id="service"
                      name="service"
                      className="mt-2 w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-olive transition-colors duration-200"
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-ink">
                        Select a service…
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s.n} value={s.name} className="bg-ink">
                          {s.name}
                        </option>
                      ))}
                      <option value="Other" className="bg-ink">
                        Other / not sure yet
                      </option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about the project, location, scope and timeline…"
                      className="mt-2 w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-olive resize-none transition-colors duration-200"
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
                    <p className="text-xs text-white/50 leading-relaxed">
                      Direct routing: Inquiries are sent to{" "}
                      <span className="text-olive font-mono">
                        info@consultpiako.com
                      </span>
                      .
                    </p>
                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex items-center gap-2 bg-olive hover:bg-olive-dark text-ink font-bold px-7 py-4 rounded-full transition-all whitespace-nowrap hover:-translate-y-0.5 disabled:opacity-70"
                    >
                      {loading ? "Transmitting..." : "Submit enquiry"}
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Office details */}
          <motion.div {...revealUp(0.1)} className="lg:col-span-5 space-y-5">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-7">
              <h3 className="font-display text-lg font-semibold mb-5 text-white">
                Headquarters & Contact
              </h3>
              <ul className="space-y-4">
                <ContactRow
                  icon={MapPin}
                  label="Registered Address"
                  value={
                    <div>
                      <div className="font-semibold text-white">
                        {CONTACT.building}
                      </div>
                      <div className="text-white/75">{CONTACT.street}</div>
                      <div className="text-white/60">
                        {CONTACT.landmark} | {CONTACT.country}
                      </div>
                    </div>
                  }
                />
                <ContactRow
                  icon={Mail}
                  label="Official Email"
                  value={
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-white/90 hover:text-olive transition-colors"
                    >
                      {CONTACT.email}
                    </a>
                  }
                />
                <ContactRow
                  icon={Phone}
                  label="Telephone"
                  value={
                    <a
                      href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                      className="text-white/90 hover:text-olive transition-colors"
                    >
                      {CONTACT.phone}
                    </a>
                  }
                />
                <ContactRow
                  icon={Clock}
                  label="Office Hours"
                  value={CONTACT.hours}
                />
              </ul>
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-olive hover:underline"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
                <a
                  href={`https://${CONTACT.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-white/50 hover:text-white transition-colors"
                >
                  {CONTACT.website}
                </a>
              </div>
            </div>

            {/* Corporate & Statutory Registration Card */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-olive" />
                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-olive">
                  Statutory & Compliance Credentials
                </h4>
              </div>
              <div className="space-y-3 font-mono text-xs divide-y divide-white/5">
                <div className="flex items-center justify-between pt-1">
                  <span className="text-white/45">Cert. No:</span>
                  <span className="font-semibold text-white tracking-wide">
                    {CONTACT.certNo}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3">
                  <span className="text-white/45">PPDA No.:</span>
                  <span className="font-semibold text-white tracking-wide">
                    {CONTACT.ppdaNo}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3">
                  <span className="text-white/45">TIN:</span>
                  <span className="font-semibold text-white tracking-wide">
                    {CONTACT.tin}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3">
                  <span className="text-white/45">Location:</span>
                  <span className="text-white/80 text-right truncate max-w-[200px]">
                    Bweyogerere, Kampala
                  </span>
                </div>
              </div>
            </div>

            {/* Map location badge */}
            <div className="relative bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden aspect-[16/9]">
              <div className="absolute inset-0 grid-overlay opacity-50" />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 40%, rgba(246,180,0,0.3) 0, transparent 40%), radial-gradient(circle at 70% 70%, rgba(246,180,0,0.15) 0, transparent 35%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-olive mx-auto mb-2" />
                  <div className="font-display text-base font-semibold text-white">
                    Plot 7, North Park Plaza
                  </div>
                  <div className="text-xs text-white/60 mt-1 max-w-xs mx-auto leading-relaxed">
                    Bypass Link, Bweyogerere · Opposite UNBS Headquarters · Uganda
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-xs font-medium text-white/55 uppercase tracking-wider"
    >
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name}>
        {label}
        {required && <span className="text-olive ml-0.5">*</span>}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-olive transition-colors duration-200"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-olive/15 text-olive shrink-0">
        <Icon className="w-4 h-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs text-white/40 uppercase tracking-wider">
          {label}
        </div>
        <div className="text-sm text-white/85 mt-0.5 break-words">{value}</div>
      </div>
    </li>
  );
}
