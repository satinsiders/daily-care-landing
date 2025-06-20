import Section from "./Section";
export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Take the diagnostic test",
      desc: "We pinpoint strengths, gaps, and target score."
    },
    {
      num: "2",
      title: "Academic Manager builds your plan",
      desc: "Daily micro‑lessons and checkpoints delivered on WhatsApp."
    },
    {
      num: "3",
      title: "Practice, chat, level‑up",
      desc: "Track mastery daily and watch confidence skyrocket."
    }
  ];
  return (
    <Section id="how" className="bg-light">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
        How It Works
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map(s => (
          <div
            key={s.num}
            className="rounded-2xl bg-white p-8 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="mx-auto mb-6 h-14 w-14 flex items-center justify-center rounded-full border-2 border-accent text-accent font-bold text-xl">
              {s.num}
            </div>
            <h3 className="mb-2 font-semibold text-lg text-dark">{s.title}</h3>
            <p className="text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}