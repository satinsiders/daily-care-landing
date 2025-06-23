/* components/Pricing.js
   — drop-in replacement that merges the new copy with the
   accent-ring “Most Popular” layout you liked —
*/

import { CheckIcon, StarIcon } from '@heroicons/react/24/solid';
import Section from './Section';

const plans = [
  {
    id: 'daily-care',
    title: 'Daily Care (5-day free trial)',
    price: '$69',
    unit: 'per month',
    popular: true,
    features: [
      '1:1 Academic Manager',
      'Personalized curriculum',
      '10,000+ SAT-mirrored questions',
      '30+ full-length practice tests',
      'Daily WhatsApp check-ins',
      'Daily high-frequency vocab training',
      'Cancel any time',
    ],
    cta: { label: 'Start Free Trial', href: '/free-trial' },
  },
  {
    id: 'tutoring',
    title: '1-to-1 Tutoring (live coaching)',
    price: '$60',
    unit: 'per hour',
    popular: false,
    features: [
      'All Daily Care features, plus:',
      'Expert tutoring',
      'Homework grading',
      'Flexible scheduling',
      'Purchasable by the hour',
    ],
    cta: { label: 'Book a Session', href: 'https://www.superfastsat.com/en' },
  },
];

export default function Pricing() {
  return (
    <Section id="pricing" className="py-16">
      {/* Section heading */}
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Choose the plan that fits your journey
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Transparent monthly&nbsp;&amp;&nbsp;hourly pricing — no hidden fees, cancel anytime.
        </p>
      </div>

      {/* Pricing cards */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative flex flex-col rounded-2xl border bg-white shadow-sm transition ${
              plan.popular
                ? 'border-accent ring-2 ring-accent'
                : 'border-gray-200 hover:shadow-md'
            }`}
          >
            {/* Popular badge */}
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">
                <StarIcon className="mr-1 inline h-4 w-4" />
                Most Popular
              </span>
            )}

            {/* Header */}
            <div className="px-8 pt-10 pb-6 text-center">
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-base font-medium text-gray-500">{plan.unit}</span>
              </div>
            </div>

            {/* Divider */}
            <hr className="mx-8 border-gray-100" />

            {/* Feature list */}
            <ul className="flex-1 space-y-3 px-8 py-6 text-left text-sm text-gray-700">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-none text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="px-8 pb-10">
              <a
                href={plan.cta.href}
                className={`block w-full rounded-lg px-6 py-3 text-center text-sm font-medium text-white transition ${
                  plan.popular
                    ? 'bg-accent hover:bg-accent/90'
                    : 'bg-dark hover:bg-dark/90'
                }`}
              >
                {plan.cta.label}
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
