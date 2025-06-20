import Section from "./Section";

export default function PainStatement() {
  return (
    <Section className="bg-accent text-white text-center !py-20 px-4">
      <div className="flex flex-col items-center gap-y-12">
        <p className="text-2xl md:text-3xl font-medium text-white/90 mb-8">
          Still stuck below 1400?
        </p>

        {/* bumped to Tailwind’s loosest preset */}
        <p className="text-4xl md:text-5xl font-bold leading-[2.25] tracking-wider">
          Generic drills don’t show you why you miss questions—or how to fix them.
        </p>
      </div>
    </Section>
  );
}
