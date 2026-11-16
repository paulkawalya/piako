"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function NewsletterBox() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    toast({
      title: "Subscribed to Piako Engineering Insights",
      description: `Updates and technical briefings will be sent to ${email}.`,
    });
    setEmail("");
  };

  return (
    <div className="mt-16 md:mt-24 bg-ink text-white rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
      <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-olive uppercase tracking-wider mb-2">
            <Mail className="w-4 h-4" />
            Engineering Intelligence & Briefings
          </div>
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Stay informed on African infrastructure development.
          </h3>
          <p className="mt-3 text-sm md:text-base text-white/70 max-w-xl leading-relaxed">
            Quarterly engineering articles, FIDIC project administration insights, and tender milestones delivered directly to your inbox. No spam.
          </p>
        </div>

        <div className="lg:col-span-5">
          {subscribed ? (
            <div className="bg-white/10 p-5 rounded-2xl flex items-center gap-3 text-sm text-white">
              <CheckCircle2 className="w-5 h-5 text-olive shrink-0" />
              <span>Thank you. You are subscribed to our technical updates.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="you@institution.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition-all"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-white font-bold px-6 py-3 rounded-full whitespace-nowrap transition-colors text-sm shrink-0"
              >
                Subscribe
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
