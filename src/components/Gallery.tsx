"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const furnitureImages = [
  { src: "/images/furniture/img1.png", alt: "Изделие из дерева ручной работы" },
  { src: "/images/furniture/img2.jpeg", alt: "Изделие из дерева ручной работы" },
  { src: "/images/furniture/img3.png", alt: "Изделие из дерева ручной работы" },
  { src: "/images/furniture/img4.png", alt: "Изделие из дерева ручной работы" },
  { src: "/images/furniture/img5.png", alt: "Изделие из дерева ручной работы" },
  { src: "/images/furniture/img6.png", alt: "Изделие из дерева ручной работы" },
];

interface StickyCardProps {
  i: number;
  src: string;
  alt: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
  targetScale: number;
  total: number;
}

function StickyCard({ i, src, alt, progress, range, targetScale, total }: StickyCardProps) {
  // The card shrinks (and settles back) only once the NEXT card begins to
  // rise over it, so the topmost card always reads at full size.
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-[100svh] items-center justify-center">
      <motion.div
        style={{
          scale,
          // Each card sits a little lower than the one beneath it, so the
          // stack stays visible at the edges instead of perfectly overlapping.
          top: `calc(${(i - total + 1) * 28}px)`,
        }}
        className="relative aspect-[3/4] w-[72vw] max-w-[460px] origin-top overflow-hidden rounded-[20px] border border-secondary/15 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)] will-change-transform"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {/* Soft inner vignette: seats the photo against the dark gallery and
            adds depth without overlaying any text on the work. */}
        <div className="pointer-events-none absolute inset-0 rounded-[20px] shadow-[inset_0_0_120px_rgba(0,0,0,0.35)]" />
      </motion.div>
    </div>
  );
}

export default function Gallery() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const total = furnitureImages.length;

  return (
    <section className="bg-additional">
      <div className="pt-25 pb-2">
        <h2 className="text-center font-sovmod text-[clamp(2rem,4vw,3.5rem)] uppercase tracking-[0.15em] text-secondary">
          Изделия
        </h2>
        <div className="mx-auto mt-4 h-px w-10 bg-secondary/50" />
        <p className="mt-6 text-center font-poiret text-[0.95rem] tracking-[0.08em] text-secondary/40 animate-pulse-line">
          листайте, чтобы увидеть изделия
        </p>
      </div>

      <div
        ref={container}
        className="relative flex w-full flex-col items-center pt-[40px] pb-[12vh]"
      >
        {furnitureImages.map((item, i) => {
          // Trailing cards rest slightly smaller, building a gentle depth stack.
          const targetScale = 1 - (total - i - 1) * 0.035;
          return (
            <StickyCard
              key={`card_${i}`}
              i={i}
              src={item.src}
              alt={item.alt}
              progress={scrollYProgress}
              range={[i * (1 / total), 1]}
              targetScale={targetScale}
              total={total}
            />
          );
        })}
      </div>
    </section>
  );
}
