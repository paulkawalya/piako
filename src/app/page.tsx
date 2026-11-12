import { Navbar } from "@/components/piako/navbar";
import { Hero } from "@/components/piako/hero";
import { StatsIntro } from "@/components/piako/stats-intro";
import { About } from "@/components/piako/about";
import { Services } from "@/components/piako/services";
import { Projects } from "@/components/piako/projects";
import { Industries } from "@/components/piako/industries";
import { Expertise } from "@/components/piako/expertise";
import { Careers } from "@/components/piako/careers";
import { Insights } from "@/components/piako/insights";
import { Contact } from "@/components/piako/contact";
import { Footer } from "@/components/piako/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsIntro />
        <About />
        <Services />
        <Projects />
        <Industries />
        <Expertise />
        <Careers />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
