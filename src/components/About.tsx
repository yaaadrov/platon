"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section className="bg-neutral py-20 md:py-30 px-6 md:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12">
        <motion.div
          className="w-full md:w-[45%]"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/images/master.jpg"
            alt="Мастер"
            className="w-full max-h-[500px] md:max-h-none object-cover border-[8px] border-secondary"
          />
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="font-sovmod uppercase text-[0.75rem] text-main/50 tracking-[0.2em]">
            О мастерской
          </span>
          <h2 className="font-sovmod uppercase text-[clamp(2rem,4vw,3.5rem)] text-main tracking-[0.02em] mt-4">
            Мастерская Платона
          </h2>
          <p className="font-poiret text-[clamp(1.1rem,1.8vw,1.4rem)] leading-[1.7] text-main mt-6">
            Мастерская Платона строится на уважении к материалу, ремеслу и
            процессу. Здесь дерево не маскируется под декор, а сохраняет
            естественную структуру, текстуру и характер. Работа строится без
            компромиссов между качеством и скоростью: изделие создаётся столько,
            сколько требует точность.
          </p>
          <div className="border-l-2 border-secondary pl-4 mt-5">
            <p className="font-poiret text-[clamp(1.1rem,1.8vw,1.4rem)] leading-[1.7] text-main/80">
              — честность к материалу
            </p>
            <p className="font-poiret text-[clamp(1.1rem,1.8vw,1.4rem)] leading-[1.7] text-main/80">
              — честность к технологии
            </p>
            <p className="font-poiret text-[clamp(1.1rem,1.8vw,1.4rem)] leading-[1.7] text-main/80">
              — честность к клиенту
            </p>
            <p className="font-poiret text-[clamp(1.1rem,1.8vw,1.4rem)] leading-[1.7] text-main/80">
              — честность к срокам и ожиданиям
            </p>
          </div>
          <div className="mt-8">
            <div className="w-[60px] h-px bg-secondary mb-4" />
            <p className="font-poiret text-[clamp(1.1rem,1.8vw,1.4rem)] leading-[1.7] text-main">
              Полный цикл работы одним исполнителем. Заказчик взаимодействует
              напрямую с мастером на всех этапах.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
