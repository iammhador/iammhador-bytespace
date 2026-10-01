import Image from "next/image";

const filters = [
  { label: "Filter", icon: "/images/icon-filter.svg" },
  { label: "Level", icon: "/images/icon-level-dark.svg" },
  { label: "Category", icon: "/images/icon-category.svg" },
];

function FilterButton({ label, icon }: { label: string; icon: string }) {
  return (
    <button className="flex items-center gap-1 rounded-3xl border border-shuttle-200 bg-white px-4 py-3 leading-[1.2] font-medium text-shuttle-700 transition hover:border-shuttle-400">
      <Image src={icon} alt="" width={24} height={24} />
      {label}
    </button>
  );
}

export function FilterBar() {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div className="flex flex-wrap gap-4">
        {filters.map((f) => (
          <FilterButton key={f.label} {...f} />
        ))}
      </div>
      <FilterButton label="Most relevant" icon="/images/icon-sort.svg" />
    </div>
  );
}
