import Image from "next/image";
import Link from "next/link";
import Section from "./Section";

export default function Hero() {
  return (
    <Section id="hero" className="pt-10 pb-20">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="relative w-full md:w-5/12 aspect-[4/3]">
          {/* using regular img to avoid build-time errors if images not present yet */}
          <img
            src="/images/hero-illustration.png"
            alt="Student using laptop"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-7/12 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-dark">
            Ace the SAT with <br className="hidden md:block" />
            <span className="text-accent">Personalized Prep</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-lg">
            Daily Care delivers a complete SAT study program—dedicated platform, personalized
            curriculum, and a personal Academic Manager who keeps you on track
            every day.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#lead"
              className="rounded-lg bg-accent px-6 py-3 text-white font-semibold shadow hover:opacity-90"
            >
              Start free trial
            </Link>
            <Link
              href="#about"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}