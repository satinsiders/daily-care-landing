// components/BuiltAround.js
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";

export default function BuiltAround() {
  const gallery = [
    { src: "/images/gallery-chat.png",       alt: "WhatsApp daily check-in" },
    { src: "/images/gallery-diagnostic.png", alt: "Diagnostic" },
    { src: "/images/gallery-manager.png",    alt: "Manager photo" },
  ];

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Section id="about" className="text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-wide">
        Built Around You, Backed by a Mentor.
      </h2>

      <div className="text-left max-w-3xl mx-auto text-gray-600 text-[18.5px] leading-[1.75] space-y-6">
        <p>
          Daily Care was born out of a simple idea: every student deserves daily,
          personalized support at a price families can afford. Not just a weekly
          tutoring session or a self-paced study, but a real, guided program
          that doesn’t break the bank.
        </p>
        <p>
          Built by a team of Ivy-League-trained educators and curriculum designers,
          the program blends a live Academic Manager who chats with you every day,
          10,000+ SAT-mirrored questions, and an adaptive lesson path that evolves
          with each diagnostic.
        </p>
        <p>
          The result? Consistent, bite-size practice that fits into busy high-school
          schedules and keeps motivation high all the way to test day.
        </p>
      </div>

      {/* gallery */}
      <div className="mt-12 max-w-4xl mx-auto grid gap-6 sm:grid-cols-3 justify-items-center">
        {gallery.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            onClick={() => setSelectedImg(img.src)}
            className="w-full h-56 object-cover rounded-2xl shadow-sm cursor-pointer"
          />
        ))}
      </div>

      {/* animated modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={selectedImg}
              alt=""
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
