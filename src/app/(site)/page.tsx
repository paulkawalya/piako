import { Hero } from "@/components/piako/hero";
import { StatsIntro } from "@/components/piako/stats-intro";
import { HomeServices } from "@/components/piako/home-services";
import { FeaturedProjects } from "@/components/piako/featured-projects";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsIntro />
      <HomeServices />
      <FeaturedProjects />
    </>
  );
}
