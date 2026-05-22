"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Contacts />
    </main>
  );
}
