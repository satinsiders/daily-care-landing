import Section from "./Section";
export default function ComparisonTable() {
  const rows = [
    {
      feature: "1:1 Academic Manager",
      daily: "Yes",
      free: "No",
      rival: "No"
    },
    {
      feature: "Personalized Curriculum",
      daily: "Yes",
      free: "No",
      rival: "Varies"
    },
    {
      feature: "Practice Questions",
      daily: "Unlimited",
      free: "Limited",
      rival: "Limited"
    },
    {
      feature: "Office Hours",
      daily: "Optional add-on",
      free: "No",
      rival: "$85/h"
    }
  ];
  return (
    <Section id="value">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Greatest value for the most personal care.
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-white">
              <th className="px-4 py-3 font-semibold">Feature</th>
              <th className="px-4 py-3 font-semibold text-center">Daily Care</th>
              <th className="px-4 py-3 font-semibold text-center">Free Resources</th>
              <th className="px-4 py-3 font-semibold text-center">Paid courses</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.feature} className="border-t border-gray-200">
                <td className="px-4 py-3">{r.feature}</td>
                <td className="px-4 py-3 text-center">{r.daily}</td>
                <td className="px-4 py-3 text-center">{r.free}</td>
                <td className="px-4 py-3 text-center">{r.rival}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}