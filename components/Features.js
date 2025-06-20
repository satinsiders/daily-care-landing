// components/Features.js
import {
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  ChartBarSquareIcon,
  ClockIcon,
  SquaresPlusIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Personalized Curriculum',
    description:
      'A study plan built from your diagnostic results and updated every day as you improve.',
    icon: SquaresPlusIcon,
  },
  {
    name: '10,000+ SAT-Mirrored Questions',
    description:
      'Practice items match the College Board’s digital format exactly—no surprises on test day.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Ivy-League Academic Manager',
    description:
      'Daily check-ins over WhatsApp keep you accountable and fine-tune your workload.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Monthly Progress Reports',
    description:
      'Take a practice exam and see weak-spot analytics & next-step recommendations each Month.',
    icon: ChartBarSquareIcon,
  },
  {
    name: 'On-Demand Question Help',
    description:
      'Snap a photo of any problem and get a step-by-step walkthrough within 24 hours.',
    icon: ClockIcon,
  },
  {
    name: 'Community & Peer Support',
    description:
      'Join live study halls and peer groups for extra motivation and strategy sharing.',
    icon: UserGroupIcon,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-light py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-accent">
            Built Around You
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Students Love Daily&nbsp;Care
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Tiny habits, huge score gains. Every feature removes friction so
            you can focus on learning—not logistics.
          </p>
        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ name, description, icon: Icon }) => (
            <div
              key={name}
              className="group rounded-lg bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent/10">
                <Icon
                  className="h-6 w-6 text-accent transition group-hover:scale-105"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                {name}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
