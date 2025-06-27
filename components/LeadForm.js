// components/LeadForm.js
import { useState } from "react";
import clsx from "clsx";

/** Simple regex helpers */
const emailRx  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRx  = /^\+?\d{7,15}$/;          // int’l-tolerant

/* 🔗 Google Form setup */
const FORM_ID  = "1FAIpQLSeYUl4tU51l1yEg8kykiWM7b3aBcRyzQfqrBGAIFevRggDVsg";
const URL      = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

/* Field entry IDs (from your pre-filled link) */
const ENTRY = {
  name:    "entry.980192885",
  grade:   "entry.679912395",
  contact: "entry.1666969452",
};

export default function LeadForm() {
  const [form, setForm] = useState({ name: "", grade: "", contact: "" });
  const [status, setStatus] = useState({ sent: false, error: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* 💡 front-end validation */
    if (!form.name.trim())       return setStatus({ error: "Name required" });
    if (!["7","8","9","10","11","12"].includes(form.grade))
      return setStatus({ error: "Enter grade 7-12" });
    if (!emailRx.test(form.contact) && !phoneRx.test(form.contact))
      return setStatus({ error: "Enter valid phone or email" });

    /* Build payload for Google Form */
    const data = new URLSearchParams({
      [ENTRY.name]:    form.name.trim(),
      [ENTRY.grade]:   form.grade.trim(),
      [ENTRY.contact]: form.contact.trim(),
    });

    try {
      await fetch(URL, {
        method: "POST",
        mode:   "no-cors",                         // bypass CORS
        headers:{ "Content-Type": "application/x-www-form-urlencoded" },
        body:   data.toString(),
      });
      setStatus({ sent: true });
      setForm({ name: "", grade: "", contact: "" });
    } catch {
      setStatus({ error: "Oops—try again, or email hello@superfastsat.com" });
    }
  };

  return (
    <section id="lead" className="bg-light py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Ready for Personalized Prep?
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Tell us a bit about you and we’ll reach out within 24 hours with a diagnostic plan — no obligation.
        </p>

        {status.sent ? (
          <div className="rounded-lg bg-green-50 border border-green-200 p-6 text-center">
            🎉 Thanks! We’ll be in touch soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid gap-6 bg-white shadow-lg rounded-xl p-8"
          >
            <label className="grid gap-2">
              <span className="font-medium">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="input"
                placeholder="Jordan Lee"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="font-medium">Grade&nbsp;(7-12)</span>
              <input
                type="number"
                name="grade"
                min="7" max="12"
                value={form.grade}
                onChange={handleChange}
                className="input"
                placeholder="11"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="font-medium">Phone (WhatsApp). Email only if necessary</span>
              <input
                type="text"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                className="input"
                placeholder="e.g. +14241234567 or jordan@email.com"
                required
              />
            </label>

            {/* Honeypot to reduce bot spam */}
            <input
              type="text"
              name="website"
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
              onChange={() => {}}
            />

            {status.error && (
              <p className="text-red-600 -mt-4">{status.error}</p>
            )}

            <button
              type="submit"
              className={clsx(
                "btn-primary justify-center",
                "disabled:opacity-60 disabled:cursor-not-allowed"
              )}
              disabled={status.sent}
            >
              {status.sent ? "Sent!" : "Submit"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
