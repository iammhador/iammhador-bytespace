import type { ComponentProps } from "react";

export function Button({ className = "", ...props }: ComponentProps<"button">) {
  return (
    <button
      className={`flex shrink-0 items-center justify-center rounded-3xl bg-lime px-6 py-3 font-satoshi text-lg leading-[1.2] font-medium whitespace-nowrap text-shuttle-950 transition hover:brightness-95 ${className}`}
      {...props}
    />
  );
}
