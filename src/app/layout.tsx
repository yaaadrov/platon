import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poiret_One } from "next/font/google";
import { ReactLenis } from "lenis/react";
import "./globals.css";

const sovmod = localFont({
  src: "./fonts/SovMod.woff2",
  display: "swap",
  variable: "--font-sovmod",
  weight: "400",
});

const poiretOne = Poiret_One({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  display: "swap",
  variable: "--font-poiret",
});

export const metadata: Metadata = {
  title: "Мастерская Платона — Авторская мебель из дерева",
  description:
    "Мастерская Платона строится на уважении к материалу, ремеслу и процессу. Авторская мебель из дерева.",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${sovmod.variable} ${poiretOne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-main text-neutral font-poiret">
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
