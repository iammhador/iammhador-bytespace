import type { ComponentProps } from "react";

export function TextField({ label, id, ...props }: ComponentProps<"input"> & { label: string }) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="text-sm leading-[1.2] font-medium text-shuttle-950">{label}</span>
      <input
        id={id}
        className="h-[52px] w-full rounded-xl border border-shuttle-100 bg-white px-6 text-lg leading-[1.6] text-shuttle-950 outline-none placeholder:text-shuttle-400 focus:border-primary"
        {...props}
      />
    </label>
  );
}
