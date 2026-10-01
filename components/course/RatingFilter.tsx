"use client";

import Image from "next/image";
import { useState } from "react";

const options = ["all", 5, 4, 3, 2, 1] as const;

export function RatingFilter() {
  const [active, setActive] = useState<(typeof options)[number]>("all");

  return (
    <div className="flex flex-wrap gap-4">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => setActive(opt)}
          className={`flex items-center gap-1 rounded-3xl px-4 py-3 leading-[1.2] font-medium transition ${
            active === opt ? "bg-lime text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100"
          }`}
        >
          {opt === "all" ? (
            "All rating"
          ) : (
            <>
              <Image src="/images/icon-star-rating.svg" alt="" width={24} height={24} />
              {opt}
            </>
          )}
        </button>
      ))}
    </div>
  );
}
