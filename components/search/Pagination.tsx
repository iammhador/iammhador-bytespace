import Image from "next/image";
import Link from "next/link";

const arrowClass =
  "flex items-center justify-center rounded-3xl border border-shuttle-200 bg-white px-4 py-3 transition hover:border-shuttle-400";

export function Pagination({ page, totalPages }: { page: number; totalPages: number }) {
  const href = (p: number) => `/search?page=${p}`;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-6">
      <Link href={href(Math.max(1, page - 1))} aria-label="Previous page" className={arrowClass}>
        <Image src="/images/icon-arrow-left.svg" alt="" width={24} height={24} />
      </Link>

      {pages.map((p) => (
        <Link
          key={p}
          href={href(p)}
          aria-current={p === page ? "page" : undefined}
          className={`font-poppins text-xl leading-7 font-semibold tracking-[-0.2px] ${
            p === page ? "text-shuttle-200" : "text-shuttle-950 hover:text-primary"
          }`}
        >
          {p}
        </Link>
      ))}

      <Link href={href(Math.min(totalPages, page + 1))} aria-label="Next page" className={arrowClass}>
        <Image src="/images/icon-arrow-right.svg" alt="" width={24} height={24} />
      </Link>
    </nav>
  );
}
