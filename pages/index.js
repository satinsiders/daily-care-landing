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
import LeadForm from "../components/LeadForm";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daily Care | 1:1 manager with personalized curriculum</title>
        <link rel="icon" href="/daily-care-icon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <PainStatement />
        <Stats />
        <Testimonials />
        <Trusted />
        <PriceTeaser />
        <BuiltAround />
        <HowItWorks />
        <Features />
        <Pricing />
        <LeadForm />
        <Curriculum />
        <ComparisonTable />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
