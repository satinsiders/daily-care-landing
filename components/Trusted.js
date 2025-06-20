import Marquee from "react-fast-marquee";
import Image   from "next/image";

const logos = [
  { src: "/logos/university-1.png", alt: "Princeton" },
  { src: "/logos/university-2.png", alt: "UCLA" },
  { src: "/logos/university-3.png", alt: "Stanford" },
  { src: "/logos/university-4.png", alt: "University of Pennsylvania" },
  { src: "/logos/university-5.png", alt: "Harvard" },
  { src: "/logos/university-6.png", alt: "MIT" }
];

export default function Trusted() {
  return (
    <section className="bg-light py-10">
      <h2 className="sr-only">Trusted by Students &amp; Universities</h2>

      <Marquee
        pauseOnHover
        speed={40}
        gradient={false}
        autoFill
        className="overflow-hidden"
      >
        {/*  space-x-16  → 16px (4 rem) between every logo
            pr-16       → 16px after the *last* logo  */}
        <div className="flex items-center space-x-16 pr-16">
          {logos.map(({ src, alt }, i) => (
            <Image
              key={i}
              src={src}
              alt={alt}
              height={60}
              width={140}
              sizes="140px"
              className="h-[60px] w-auto object-contain opacity-80 hover:opacity-100 transition"
              priority={i === 0}
            />
          ))}
        </div>
      </Marquee>
    </section>
  );
}
