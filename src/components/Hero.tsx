"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-secondary overflow-hidden"
    >
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <motion.img
          src="/images/logo.png"
          alt="Мастерская Платона"
          className="w-[70vw] max-w-[600px] md:w-[50vw] md:max-w-[750px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0 }}
        />
        <motion.p
          className="font-poiret text-[clamp(1.3rem,3vw,2rem)] text-main tracking-[0.08em] mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          Авторская мебель из дерева
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
      >
        <span className="font-poiret text-main/50 text-[0.85rem] tracking-[0.1em]">
          листайте вниз
        </span>
        <div className="w-px h-10 bg-main animate-pulse-line" />
      </motion.div>
    </section>
  );
}
