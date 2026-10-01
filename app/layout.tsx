import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins-family",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const satoshi = localFont({
  variable: "--font-satoshi-family",
  src: [
    { path: "./fonts/satoshi-400.woff2", weight: "400" },
    { path: "./fonts/satoshi-500.woff2", weight: "500" },
    { path: "./fonts/satoshi-700.woff2", weight: "700" },
  ],
});

const clash = localFont({
  variable: "--font-clash-family",
  src: [{ path: "./fonts/clash-display-700.woff2", weight: "700" }],
});

export const metadata: Metadata = {
  title: "ByteSpace",
  description:
    "Get access to hundreds of courses. Unlock your creativity, gain valuable knowledge, and grow your business.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} ${clash.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
