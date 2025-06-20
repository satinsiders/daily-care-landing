import Section from "./Section";
import ImprovementChart from "./ImprovementChart";
export default function Stats() {
  const stats = [
    { label: "Average Score Increase (in 4 weeks)", value: "+160 points" },
    { label: "Students Hitting 1400+", value: "65%" },
    { label: "Students Admitted to Top 30", value: "40%" }
  ];
  return (
    <Section id="stats">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {stats.map(s => (
          <div
            key={s.label}
            className="rounded-2xl bg-light p-6 text-center border border-gray-200"
          >
            <p className="text-3xl font-extrabold text-accent mb-1">{s.value}</p>
            <p className="text-sm font-medium text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="max-w-lg mx-auto">
        <ImprovementChart />
      </div>
    </Section>
  );
}