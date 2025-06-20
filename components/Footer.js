import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200" id="cta">
      <div className="container mx-auto px-4 py-16 max-w-4xl text-center space-y-8">
        <h2 className="text-3xl font-extrabold text-dark">Ready to ace the SAT ?</h2>
        <p className="text-gray-600">
          Daily Care moves steadily toward your goal—your journey to 1600 starts
          now.
        </p>
        <a
          href="https://forms.gle/h78DBjJcRDVpdB1a7"
          className="inline-block rounded-lg bg-accent px-8 py-4 text-white font-semibold shadow hover:opacity-90"
        >
          Get Started
        </a>
        <ul className="flex flex-wrap justify-center gap-6 text-xs text-gray-500 pt-12">
          <li>
            <Link href="#">Terms of Service</Link>
          </li>
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
          <li>©2025 SuperfastSAT. All rights reserved.</li>
        </ul>
      </div>
    </footer>
  );
}