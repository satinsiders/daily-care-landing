/* components/improvementChart.js
   Adds a subject toggle + growth line chart + distribution table.
   Requires headlessui & react-chartjs-2 (already in package.json).
*/
import { Tab } from "@headlessui/react";
import dynamic from "next/dynamic";
import clsx from "clsx";
import React, { useState } from "react";
import "chart.js/auto";

const Line = dynamic(() => import("react-chartjs-2").then((m) => m.Line), {
  ssr: false,
});

const weeklyData = {
  // Scores now range from 450 to around 800 with varied jumps
  math: [450, 480, 520, 540, 610, 630, 710, 770],
  reading: [470, 495, 515, 550, 620, 640, 710, 760],
};
const labels = ["Week 0", "1", "2", "3", "4", "5", "6", "7"];

export default function ImprovementChart() {
  const [subject, setSubject] = useState("math");

  const chartData = {
    labels,
    datasets: [
      {
        label: subject === "math" ? "Math" : "Reading & Writing",
        data: weeklyData[subject],
        borderWidth: 3,
        tension: 0.3,
        borderColor: "#00B894",
        pointRadius: 4,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 800 },
    plugins: {
      legend: { display: false },
      tooltip: { backgroundColor: "#333" },
    },
    scales: {
      y: { beginAtZero: false, grid: { color: "#eee" } },
      x: { grid: { display: false } },
    },
  };

  return (
    <section id="improvement" className="py-20 bg-light">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-4 text-center text-2xl font-semibold">
          Watch scores climb—week after week
        </h2>

        {/* Subject switcher */}
        <Tab.Group
          as="div"
          className="mx-auto mb-8 flex max-w-xs justify-center space-x-1 rounded-lg bg-white p-1 shadow-sm"
          selectedIndex={subject === "math" ? 0 : 1}
          onChange={(idx) => setSubject(idx === 0 ? "math" : "reading")}
        >
          {["Math", "Reading & Writing"].map((t) => (
            <Tab
              key={t}
              className={({ selected }) =>
                clsx(
                  "w-full py-2 text-sm font-medium leading-5 rounded-md",
                  selected ? "bg-accent text-white" : "text-gray-700"
                )
              }
            >
              {t}
            </Tab>
          ))}
        </Tab.Group>

        {/* Growth line chart */}
        <div className="relative h-64 w-full">
          <Line data={chartData} options={chartOptions} />
        </div>

        {/* Distribution table */}
        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <caption className="mb-2 text-center font-medium">
              Score-Increase Distribution (All Students, n = 773)
            </caption>
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-2">Bucket</th>
                <th className="px-4 py-2">Students</th>
                <th className="px-4 py-2">% of Cohort</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["< +50", 10, "1 %"],
                ["+50 – 100", 95, "12 %"],
                ["+100 – 150", 190, "25 %"],
                ["+150 – 200", 300, "39 %"],
                ["≥ +200", 178, "23 %"],
              ].map(([bucket, n, pct]) => (
                <tr key={bucket} className="even:bg-white odd:bg-gray-50">
                  <td className="px-4 py-2">{bucket}</td>
                  <td className="px-4 py-2">{n}</td>
                  <td className="px-4 py-2">{pct}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
