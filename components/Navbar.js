import Link from "next/link";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 max-w-6xl">
        <Link href="/" className="text-lg font-bold">
          satinsiders
        </Link>
        <Link
          href="https://forms.gle/h78DBjJcRDVpdB1a7"
          className="rounded-lg bg-accent px-4 py-2 text-white text-sm font-semibold shadow hover:opacity-90"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}