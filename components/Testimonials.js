// components/Testimonials.js
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Scored 1520 (↑230)",
    quote:
      "Daily Care turned studying into bite-size missions. Alissa checked in every day, which honestly kept me from procrastinating.",
    avatar: "/avatars/sarah.png",
  },
  {
    name: "Maria P.",
    role: "National Merit Semifinalist",
    quote:
      "I’d tried three other prep apps. This was the first that adapted after each diagnostic. I walked in on test day feeling like every question was familiar.",
    avatar: "/avatars/maria.png",
  },
  {
    name: "Jae-min L.",
    role: "Improved 210 pts",
    quote:
      "This was actually dope. WhatsApp pings felt personal. Shoutout to Jason, I wasn't so good at managing the schedule but he got me through.",
    avatar: "/avatars/jaemin.png",
  },
  {
    name: "Ethan R.",
    role: "Athlete, 1430 goal",
    quote:
      "Practice sets slotted perfectly between trainings. The 30 minute sessions raised my Reading score 130 points in five weeks.",
    avatar: "/avatars/ethan.png",
  },
  {
    name: "Ayesha S.",
    role: "First-gen college-bound",
    quote:
      "I feared the math section. The step-by-step feedback after each practice test made the concepts stick.",
    avatar: "/avatars/ayesha.png",
  },
  {
    name: "Mateo G.",
    role: "Scholarship winner",
    quote:
      "Seeing real SAT-mirrored questions daily built quiet confidence. I never imagined breaking 1500 was within reach—until I did.",
    avatar: "/avatars/mateo.png",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-light">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Real Students, Real Results
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Consistent guidance + adaptive practice = breakthrough scores.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, role, quote, avatar }) => (
            <figure
              key={name}
              className="relative rounded-lg bg-white p-8 shadow-lg"
            >
              <Image
                src={avatar}
                alt={`Avatar of ${name}`}
                width={56}
                height={56}
                className="mx-auto rounded-full"
              />
              <blockquote className="mt-6 text-gray-900 font-medium leading-relaxed">
                “{quote}”
              </blockquote>
              <figcaption className="mt-6">
                <div className="text-accent font-semibold">{name}</div>
                <div className="text-sm text-gray-500">{role}</div>
              </figcaption>
              <span
                aria-hidden
                className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 text-6xl text-accent opacity-10"
              >
                &#10003;
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
