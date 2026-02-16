import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { SkillsSection } from "./components/SkillsSection";
import { TransformationSection } from "./components/TransformationSection";
import { PricingSection } from "./components/PricingSection";
import { MonthlyQualification } from "./components/MonthlyQualification";
import { DifferenceSection } from "./components/DifferenceSection";
import { FutureVision } from "./components/FutureVision";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <ProblemSection />
      <SkillsSection />
      <TransformationSection />
      <PricingSection />
      <MonthlyQualification />
      <DifferenceSection />
      <FutureVision />
      <FinalCTA />
      <Footer />
    </div>
  );
}
