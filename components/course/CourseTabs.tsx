"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function CourseTabs() {
  const { slug } = useParams<{ slug: string }>();
  const pathname = usePathname();
  const base = `/courses/${slug}`;
  const tabs = [
    { label: "About", href: base },
    { label: "Lessons", href: `${base}/lessons` },
    { label: "Reviews", href: `${base}/reviews` },
  ];

  return (
    <nav className="flex gap-4">
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.label}
            href={tab.href}
            scroll={false}
            className={`rounded-3xl px-4 py-3 leading-[1.2] font-medium transition ${
              active ? "bg-lime text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
