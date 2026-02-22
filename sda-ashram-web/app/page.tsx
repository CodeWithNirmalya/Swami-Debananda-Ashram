import { HomeHero } from "@/components/home/HomeHero";
import { MaharajSection } from "@/components/home/MaharajSection";
import { ActivitySlider } from "@/components/home/ActivitySlider";
import { VolunteerHighlight } from "@/components/home/VolunteerHighlight";
import { ContributionHighlight } from "@/components/home/ContributionHighlight";
import { MeetMaharajSection } from "@/components/home/MeetMaharajSection";
import { BlogSection } from "@/components/home/BlogSection";

export default function Home() {
  return (
    <main className="relative">
      <HomeHero />
      <ActivitySlider />
      <MaharajSection />
      <VolunteerHighlight />
      <ContributionHighlight />
      <MeetMaharajSection />
      <BlogSection />
    </main>
  );
}
