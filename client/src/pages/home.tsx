import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import TimelineSection from "@/components/timeline-section";
import MilestonesSection from "@/components/milestones-section";
import GanttChartSection from "@/components/gantt-chart-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TimelineSection />
      <MilestonesSection />
      <GanttChartSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
