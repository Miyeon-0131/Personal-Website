import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { CodingJourney } from "@/app/components/CodingJourney";
import { AcademicAchievements } from "@/app/components/AcademicAchievements";
import { Awards } from "@/app/components/Awards";
import { Projects } from "@/app/components/Projects";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <About />
      <CodingJourney />
      <AcademicAchievements />
      <Awards />
      <Projects />
      <Footer />
    </div>
  );
}
