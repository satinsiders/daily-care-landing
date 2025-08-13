import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 max-w-6xl">
        <Link href="/" className="text-lg font-bold">
          satinsiders
        </Link>
        <Link
          href="/#lead"
          className="hidden md:inline-block rounded-lg bg-accent px-4 py-2 text-white text-sm font-semibold shadow hover:opacity-90"
        >
          Get Started
        </Link>
      </div>
      <nav
        className={`${open ? "block" : "hidden"} md:hidden bg-white shadow-md border-t border-gray-200`}
      >
        <div className="px-4 py-2">
          <Link
            href="/blog"
            className="block py-2 text-sm font-medium hover:text-accent"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/#lead"
            className="mt-2 block w-full rounded-lg bg-accent px-4 py-2 text-center text-sm font-semibold text-white shadow hover:opacity-90"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
