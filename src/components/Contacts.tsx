"use client";

import { motion } from "motion/react";

export default function Contacts() {
  return (
    <section className="bg-secondary min-h-[60vh] flex items-center justify-center py-25 pb-15">
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0 }}
      >
        <span className="font-sovmod uppercase text-[0.9rem] text-main/50 tracking-[0.2em]">
          Контакты
        </span>
        <h2 className="font-sovmod uppercase text-[clamp(2rem,4vw,3.5rem)] text-main tracking-[0.02em] mt-4">
          Связаться с мастерской
        </h2>
        <a
          href="tel:+7 921 386-44-64"
          className="font-poiret text-[clamp(1.5rem,3vw,2.2rem)] text-main hover:text-main/70 hover:underline transition-colors mt-8"
        >
          +7 (921) 386-44-64
        </a>
        <p className="font-poiret text-[0.9rem] text-main/60 mt-12">
          Мастерская Платона &copy; 2026
        </p>
      </motion.div>
    </section>
  );
}
