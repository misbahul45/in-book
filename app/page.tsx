import AboutSection from "@/components/home/AboutSection";
import Carrousel from "@/components/home/Carrousel";
import HeroSection from "@/components/home/HeroSection";


export default function Home() {
  return (
    <div className="pb-16 overflow-hidden">
      <HeroSection />
      <AboutSection />
      <Carrousel />
    </div>
  );
}