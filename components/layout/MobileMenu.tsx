"use client";

import Link from "next/link";
import { useState } from "react";

type NavLink = { label: string; href: string };

export function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex size-10 flex-col items-center justify-center gap-1.5 rounded-full hover:bg-white/10"
      >
        <span className={`h-0.5 w-5 rounded bg-shuttle-50 transition ${open ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`h-0.5 w-5 rounded bg-shuttle-50 transition ${open ? "opacity-0" : ""}`} />
        <span className={`h-0.5 w-5 rounded bg-shuttle-50 transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>

      {open && (
        <nav className="absolute inset-x-4 top-[88px] flex flex-col gap-1 rounded-2xl bg-white p-3 shadow-xl">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-shuttle-950 hover:bg-shuttle-50"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
