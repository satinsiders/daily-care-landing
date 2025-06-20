import Section from "./Section";
import Link from "next/link";

export default function PriceTeaser() {
  return (
    <Section className="bg-accent text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left justify-center md:justify-between gap-6">
        <p className="text-2xl md:text-3xl font-semibold">
          Unlock personalized SAT support for just{" "}
          <span className="text-4xl md:text-5xl font-bold">
            $69
            <span className="text-2xl md:text-3xl font-semibold">/month</span>
          </span>
        </p>
        <Link
          href="https://forms.gle/h78DBjJcRDVpdB1a7"
          className="inline-block rounded-lg bg-white/10 px-8 py-4 font-semibold hover:bg-white/20"
        >
          See plan details
        </Link>
      </div>
    </Section>
  );
}
