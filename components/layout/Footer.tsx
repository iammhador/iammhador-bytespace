import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const linkColumns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export function Footer() {
  return (
    <footer className="border-t border-shuttle-200 bg-white px-4 pt-[71px] pb-[72px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[130px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-[92px]">
          <div className="flex flex-col gap-[45px]">
            <div className="flex flex-col gap-4">
              <Logo />
              <p className="max-w-[528px] text-sm leading-[1.6]">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <form className="flex flex-wrap gap-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-[52px] w-full max-w-[376px] rounded-full border border-shuttle-200 bg-white px-6 leading-[1.6] outline-none placeholder:text-shuttle-950 focus:border-primary"
                />
                <Button type="submit">Search</Button>
              </form>
              <p className="max-w-[504px] text-xs leading-[1.6]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from
                our company.
              </p>
            </div>
          </div>

          <nav className="flex gap-10 lg:pt-12">
            {linkColumns.map((column, i) => (
              <ul key={i} className="flex w-[167px] flex-col gap-4 text-sm leading-[1.6]">
                {column.map((label) => (
                  <li key={label}>
                    <Link href="#" className="hover:text-primary">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-5 border-t border-shuttle-200 pt-5 text-xs leading-[1.6] sm:flex-row sm:justify-between">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex gap-6">
            {legalLinks.map((label) => (
              <Link key={label} href="#" className="hover:text-primary">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
