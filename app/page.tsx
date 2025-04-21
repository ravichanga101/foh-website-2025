import { HeroSlider } from "@/components/hero-slider";
import { AboutSection } from "@/components/home/about-section";
import { StatsSection } from "@/components/home/stats-section";
import { PhilosophySection } from "@/components/home/philosophy-section";
import { BestPractices } from "@/components/home/best-practices";
import { CollaborationsSection } from "@/components/home/collaborations-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { CampusLifeSection } from "@/components/home/campus-life-section";
import { CallToAction } from "@/components/home/call-to-action";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <StatsSection />
      <PhilosophySection />
      <BestPractices />
      <CollaborationsSection />
      <ProgramsSection />
      <CampusLifeSection />
      <CallToAction />
    </>
  );
}
