/* components/Curriculum.js */
import { CheckCircleIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

const phases = [
  {
    label: 'Phase 1',
    title: 'Core Foundations',
    bullets: [
      'Diagnostic + score-gap analysis',
      'Subject–verb agreement refresh',
      'Fundamental algebra & order of ops',
      'Active reading: passage mapping',
    ],
  },
  {
    label: 'Phase 2',
    title: 'Sentence Mechanics',
    bullets: [
      'Identifying independent vs. dependent clauses',
      'Comma, colon & dash precision',
      'Verb tense & parallelism drills',
      'No-calc mental-math warm-ups',
    ],
  },
  {
    label: 'Phase 3',
    title: 'Evidence & Inference',
    bullets: [
      'Paired “evidence follow-up” questions',
      'Inference & function-purpose strategy',
      'Transitional logic (however, therefore)',
      'Systems of equations problem sets',
    ],
  },
  {
    label: 'Phase 4',
    title: 'Advanced Reasoning',
    bullets: [
      'Rhetorical synthesis passages',
      'Non-linear math: functions & graphs',
      'Modifiers & pronoun clarity drills',
      'Timed section simulations',
    ],
  },
  {
    label: 'Phase 5',
    title: 'Mastery & Speed',
    bullets: [
      'Hardest-in-section question sprints',
      'Math grid-in accuracy boosters',
      'Annotation shorthand refinement',
      'Full-length practice test + review',
    ],
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-16 bg-light">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-display font-semibold text-dark mb-4">
          What does the evolving curriculum look like?
        </h2>
        <p className="mb-10 text-lg text-gray-700">
          You move through progressive phases, and then <em>loop adaptively</em>
          —so content keeps recalibrating until your test date.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map(({ label, title, bullets }) => (
            <div
              key={label}
              className="rounded-xl bg-white shadow-md p-6 flex flex-col"
            >
              <span className="text-accent font-bold tracking-wide">
                {label}
              </span>
              <h3 className="text-xl font-semibold mt-1 mb-4">{title}</h3>

              <ul className="space-y-2 flex-1">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="ml-2 text-gray-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Adaptive loop card */}
          <div className="rounded-xl bg-accent/10 border border-accent p-6 flex flex-col justify-center">
            <ArrowPathIcon className="h-8 w-8 text-accent mx-auto mb-4" />
            <h3 className="text-center text-xl font-semibold mb-2">
              Adaptive Loop
            </h3>
            <p className="text-center text-gray-800 leading-snug">
              After Phase 5, lessons recycle based on fresh diagnostics so
              you’re always sharpening the <em>next</em> weakest link—right up
              to test day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
