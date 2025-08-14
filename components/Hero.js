import Image from "next/image";
import Link from "next/link";
import Section from "./Section";

export default function Hero() {
  return (
    <Section id="hero" className="pt-6 pb-12 md:pt-10 md:pb-20">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
        <div className="relative w-full md:w-5/12 aspect-[4/3]">
          {/* using regular img to avoid build-time errors if images not present yet */}
          <img
            src="/images/hero-illustration.png"
            alt="Student using laptop"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-7/12 space-y-4 md:space-y-6">
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
              Get Started
            </Link>
            <Link
              href="#about"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100"
            >
              About
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-medium text-gray-700">
            <span className="rounded-full bg-light px-4 py-1">+160 pts avg in 4 wks</span>
            <span className="rounded-full bg-light px-4 py-1">65% hit 1400+</span>
          </div>
          <p className="text-sm text-gray-500 italic">
            “Daily Care turned studying into bite-size missions.” — Sarah K.
          </p>
        </div>
      </div>
    </Section>
  );
}
