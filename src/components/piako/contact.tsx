"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { CONTACT, SERVICES } from "@/lib/piako/content";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    setSubmitted(true);
    toast({
      title: "Enquiry received",
      description: `Thank you${name ? `, ${name}` : ""}. Our team will respond within two working days.`,
    });
    form.reset();
  };

  return (
    <section id="contact" className="bg-ink text-white section-pad">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="olive-rule" />
              <span className="eyebrow text-olive">08 — Contact</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] font-bold tracking-tight">
              Let&apos;s plan your next infrastructure project.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-base text-white/65 leading-relaxed">
              Request a consultation or submit a project enquiry. Tell us the
              sector, the country and the scope &mdash; we will come back with
              the right team and a proposed approach.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 md:p-9">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <CheckCircle2 className="w-14 h-14 text-olive mb-4" />
                  <h3 className="font-display text-2xl font-bold mb-2">
                    Enquiry received
                  </h3>
                  <p className="text-white/65 max-w-md">
                    Thank you for getting in touch. A member of our team will
                    respond within two working days.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-olive font-semibold hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
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
                      className="mt-2 w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-olive"
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
                      className="mt-2 w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-olive resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
                    <p className="text-xs text-white/40">
                      By submitting, you agree to be contacted about your
                      enquiry. We do not share your information.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-olive hover:bg-olive-dark text-white font-semibold px-7 py-4 rounded-full transition-colors whitespace-nowrap"
                    >
                      Submit enquiry
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Office details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-7">
              <h3 className="font-display text-lg font-semibold mb-5">
                Office
              </h3>
              <ul className="space-y-4">
                <ContactRow icon={MapPin} label="Address" value={CONTACT.address} />
                <ContactRow icon={Phone} label="Phone" value={CONTACT.phone} />
                <ContactRow icon={Mail} label="Email" value={CONTACT.email} />
                <ContactRow icon={Clock} label="Hours" value={CONTACT.hours} />
              </ul>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-olive hover:underline"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>

            {/* Map placeholder */}
            <div className="relative bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 grid-overlay opacity-50" />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 40%, rgba(107,123,63,0.4) 0, transparent 40%), radial-gradient(circle at 70% 70%, rgba(107,123,63,0.25) 0, transparent 35%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-olive mx-auto mb-2" />
                  <div className="font-display text-base font-semibold">
                    Kampala, Uganda
                  </div>
                  <div className="text-xs text-white/50 mt-1">
                    Interactive map will appear here
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        className="mt-2 w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-olive"
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
  value: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-olive/15 text-olive shrink-0">
        <Icon className="w-4 h-4" />
      </div>
      <div className="min-w-0">
        <div className="text-xs text-white/40 uppercase tracking-wider">
          {label}
        </div>
        <div className="text-sm text-white/85 mt-0.5 break-words">{value}</div>
      </div>
    </li>
  );
}
