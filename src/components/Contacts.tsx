"use client";

import { motion, useReducedMotion } from "motion/react";

const PHONE_DISPLAY = "+7 (921) 386-44-64";
// Built from the display string so the bare number never appears as a literal.
const PHONE_HREF = `tel:${PHONE_DISPLAY.replace(/[^\d+]/g, "")}`;

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contacts() {
  const reduce = useReducedMotion();

  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-secondary px-6 py-25 pb-15">
      <motion.div
        className="flex flex-col items-center text-center"
        initial={reduce ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <span className="font-sovmod text-[0.9rem] uppercase tracking-[0.2em] text-main/50">
          Контакты
        </span>
        <h2 className="mt-4 font-sovmod text-[clamp(2rem,4vw,3.5rem)] uppercase tracking-[0.02em] text-main">
          Связаться с мастерской
        </h2>
        <a
          href={PHONE_HREF}
          className="mt-8 font-poiret text-[clamp(1.5rem,3vw,2.2rem)] text-main transition-colors duration-300 hover:text-main/70 hover:underline"
        >
          {PHONE_DISPLAY}
        </a>
        <p className="mt-12 font-poiret text-[0.9rem] tracking-[0.04em] text-main/60">
          Санкт-Петербург
        </p>
        <p className="mt-1.5 font-poiret text-[0.9rem] text-main/45">
          Мастерская Платона &copy; 2026
        </p>
      </motion.div>
    </section>
  );
}
