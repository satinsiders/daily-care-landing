import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import Section from "./Section";

export default function FAQ() {
  const faqs = [
    {
      q: "What is the duration of the course?",
      a: "Daily Care is ongoing until you hit your goal. Typical students stay 8-12 weeks."
    },
    {
      q: "How is the time commitment?",
      a: "Plan on 30-40 min per day, including drills and quick chats with your Academic Manager."
    },
    {
      q: "Can I cancel any time?",
      a: "Yes! Billing is monthly. Pause or cancel in two clicks from your dashboard."
    },
    {
      q: "Who are the Academic Managers?",
      a: "Only managers who pass our rigorous 180-minute interview process join the SuperfastSAT team. Enjoy personalized 1:1 guidance from professionals with proven SAT expertise."
    },
    {
      q: "Do I keep my materials forever?",
      a: "All of the content remain accessible after the program ends."
    },
    {
      q: "Is this program suitable for all SAT levels?",
      a: "Absolutely! We possess a robust base of content that allows us to customize the curriculum based on your level; doesn't matter if you are a beginner or someone aiming for a 1500+ top score."
    }
  ];
  return (
    <Section id="faq" className="bg-light">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map(item => (
          <Disclosure key={item.q}>
            {({ open }) => (
              <div className="border border-gray-200 rounded-lg bg-white">
                <Disclosure.Button className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium">
                  {item.q}
                  <ChevronUpIcon
                    className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-0 pb-3 text-gray-600 text-sm">
                  {item.a}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </Section>
  );
}