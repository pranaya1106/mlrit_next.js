import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import SuccessStories from "@/components/SuccessStories";
import AboutSection from "@/components/AboutSection";
import Achievements from "@/components/Achievements";
import Placements from "@/components/Placements";
import GallerySection from "@/components/GallerySection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsStrip />
        <SuccessStories />
        <AboutSection />
        <Achievements />
        <Placements />
        <GallerySection />
        <EventsSection />
      </main>
      <Footer />
    </>
  );
}
