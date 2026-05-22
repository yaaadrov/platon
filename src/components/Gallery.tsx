"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface StickyCardProps {
  i: number;
  src: string;
  alt: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
  targetScale: number;
}

function StickyCard({
  i,
  src,
  alt,
  progress,
  range,
  targetScale,
  totalCards,
}: StickyCardProps & { totalCards: number }) {
  const scale = useTransform(progress, range, [1, targetScale]);
  // Rotate only after this card has been "passed" — next card starts covering it
  // The next card starts appearing at range [(i+1) * step, 1], so rotation
  // should begin when the next card enters and end shortly after
  const step = (1 / totalCards) * 0.75;
  const rotateStart = (i + 1) * step;
  const rotateEnd = Math.min(rotateStart + step * 2, 1);
  const rotate = useTransform(progress, [rotateStart, rotateEnd], [0, -8]);

  return (
    <div className="sticky top-0 flex items-center justify-center">
      <motion.div
        style={{
          scale,
          rotate,
          top: `calc(-5vh + ${i * 20 + 250}px)`,
        }}
        className="relative -top-1/4 w-[92vw] h-[65vw] md:w-[900px] md:h-[600px] rounded-2xl overflow-hidden border border-secondary/30 origin-top"
      >
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </motion.div>
    </div>
  );
}

const furnitureImages = [
  { src: "/images/furniture/img1.jpg", alt: "Изделие 1" },
  { src: "/images/furniture/img2.jpg", alt: "Изделие 2" },
  { src: "/images/furniture/img3.jpg", alt: "Изделие 3" },
  { src: "/images/furniture/img4.jpg", alt: "Изделие 4" },
  { src: "/images/furniture/img5.jpg", alt: "Изделие 5" },
  { src: "/images/furniture/img6.jpg", alt: "Изделие 6" },
];

export default function Gallery() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-additional">
      <div className="pt-25 pb-4">
        <h2 className="font-sovmod uppercase text-[clamp(2rem,4vw,3.5rem)] text-secondary tracking-[0.15em] text-center">
          Изделия
        </h2>
        <div className="w-10 h-px bg-secondary/50 mx-auto mt-4" />
        <p className="font-poiret text-secondary/40 text-[0.95rem] tracking-[0.08em] text-center mt-6 animate-pulse-line">
          листайте, чтобы увидеть изделия
        </p>
      </div>

      <div
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pt-[60px] pb-[100vh]"
      >
        {furnitureImages.map((item, i) => {
          const targetScale = Math.max(
            0.5,
            1 - (furnitureImages.length - i - 1) * 0.1
          );
          return (
            <StickyCard
              key={`card_${i}`}
              i={i}
              src={item.src}
              alt={item.alt}
              progress={scrollYProgress}
              range={[i * (1 / furnitureImages.length) * 0.75, 1]}
              targetScale={targetScale}
              totalCards={furnitureImages.length}
            />
          );
        })}
      </div>
    </section>
  );
}
