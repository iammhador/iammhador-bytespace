import type { ReactNode } from "react";

export function ContentSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="font-poppins text-xl leading-[1.2] font-semibold tracking-[-0.2px] text-shuttle-950">{title}</h2>
      {children}
    </section>
  );
}

export function BodyText({ children }: { children: ReactNode }) {
  return <p className="leading-[1.6] text-shuttle-700">{children}</p>;
}
