import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PainStatement from "../components/PainStatement";
import Trusted from "../components/Trusted";
import PriceTeaser from "../components/PriceTeaser";
import Pricing from "../components/Pricing";
import BuiltAround from "../components/BuiltAround";
import HowItWorks from "../components/HowItWorks";
import Curriculum from "../components/Curriculum";
import Features from "../components/Features";
import Stats from "../components/Stats";
import ComparisonTable from "../components/ComparisonTable";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainStatement />
        <Trusted />
        <Stats />
        <PriceTeaser />
        <BuiltAround />
        <HowItWorks />
        <Features />
        <Pricing />
        <Curriculum />
        <ComparisonTable />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}