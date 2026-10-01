"use client";

import { useState } from "react";

const homeRows = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export function CategoryTabs({
  rows = homeRows,
  showMore = true,
  rowClassName = "justify-center",
}: {
  rows?: string[][];
  showMore?: boolean;
  rowClassName?: string;
}) {
  const [active, setActive] = useState(rows[0][0]);

  return (
    <div className="flex flex-col gap-[21px]">
      {rows.map((row, i) => (
        <div key={i} className={`flex flex-wrap items-center gap-4 ${rowClassName}`}>
          {row.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-3xl px-4 py-3 leading-[1.2] font-medium whitespace-nowrap transition ${
                active === tab ? "bg-lime text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100"
              }`}
            >
              {tab}
            </button>
          ))}
          {showMore && i === rows.length - 1 && (
            <button className="leading-[1.2] font-medium text-primary hover:underline">+ More</button>
          )}
        </div>
      ))}
    </div>
  );
}
