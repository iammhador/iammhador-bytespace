export function SectionHeading({
  title,
  description,
  size = "lg",
}: {
  title: string;
  description: string;
  size?: "lg" | "md";
}) {
  return (
    <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
      <h2
        className={`font-poppins leading-[1.2] font-semibold text-ink ${
          size === "lg"
            ? "max-w-[588px] text-4xl tracking-[-0.44px] md:text-[44px]"
            : "text-3xl tracking-[-0.36px] md:text-4xl"
        }`}
      >
        {title}
      </h2>
      <p className="text-lg leading-[1.6] text-shuttle-400">{description}</p>
    </div>
  );
}
