"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BadgeCheck, Clock3, Phone, PiggyBank, ShieldCheck, Star, type LucideIcon } from "lucide-react";
import workerImage from "@/app/assets/worker.png";

type Benefit = { icon: LucideIcon; title: string; description: string };

const benefits: Benefit[] = [
  { icon: BadgeCheck, title: "Professionnels certifiés", description: "Une équipe qualifiée et expérimentée pour garantir des travaux impeccables et conformes aux normes." },
  { icon: Clock3, title: "Disponible 24h/24 et 7j/7", description: "Nous intervenons à tout moment pour vos urgences et vos besoins en plomberie." },
  { icon: ShieldCheck, title: "Travail garanti", description: "Toutes nos interventions sont garanties pour vous offrir tranquillité d’esprit et durabilité." },
  { icon: PiggyBank, title: "Tarifs transparents et compétitifs", description: "Des prix justes et clairs, sans surprise, avec des devis gratuits et détaillés." },
];

export function WhyChooseUs() {
  return (
    <section className="overflow-hidden bg-[#fff] px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1270px]">
        <div className="relative min-h-[360px] lg:min-h-[385px]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 max-w-[780px] pt-4"
          >
            <p className="flex items-center gap-4 text-[16px] font-bold uppercase text-sky-500 before:h-px before:w-11 before:bg-sky-500 after:h-px after:w-11 after:bg-sky-500">Pourquoi nous choisir</p>
            <h2 className="mt-6 text-[40px] font-extrabold leading-[1.16] tracking-[-0.055em] text-[#06265a] sm:text-[53px]">
              La qualité et votre satisfaction<br className="hidden lg:block" /> sont <span className="text-sky-500">notre priorité</span>
            </h2>
            <span className="mt-7 block h-1 w-15 rounded-full bg-sky-500" />
            <p className="mt-6 max-w-[600px] text-[17px] leading-[1.75] text-[#4b638c]">Nous mettons notre expertise et notre passion au service de vos installations de plomberie. Des solutions fiables, durables et un service client irréprochable.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative mt-10 h-[330px] lg:absolute lg:-right-8 lg:-top-24 lg:mt-0 lg:h-[545px] lg:w-[620px]"
          >
            <Image src={workerImage} alt="Plombier professionnel" fill sizes="(min-width: 1024px) 620px, 100vw" className="object-contain object-center" />
          </motion.div>
        </div>

        <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (index % 4) * 0.1 }}
              className="group min-h-[350px] rounded-xl border border-[#e4ebf3] bg-white px-5 py-6 text-center shadow-[0_8px_18px_rgba(11,49,96,0.07)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_18px_35px_rgba(12,87,158,0.15)]"
            >
              <span className="mx-auto flex h-[110px] w-[110px] items-center justify-center rounded-full bg-[#edf7ff] text-sky-500 transition-transform duration-300 group-hover:scale-110"><Icon aria-hidden="true" strokeWidth={1.65} className="h-[58px] w-[58px]" /></span>
              <h3 className="mx-auto mt-5 max-w-[180px] text-[17px] font-bold leading-[1.35] text-[#071e51]">{title}</h3>
              <span className="mx-auto mt-5 block h-px w-13 bg-sky-500" />
              <p className="mt-5 text-[14px] leading-[1.7] text-[#3f5882]">{description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-6 flex flex-col items-center justify-between gap-6 rounded-xl bg-[#edf8ff] px-7 py-5 text-center lg:flex-row lg:text-left">
          <div className="flex items-center gap-4"><span className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-white text-sky-500"><ShieldCheck aria-hidden="true" className="h-9 w-9" /></span><div><p className="text-[19px] font-bold text-[#092157]">Votre confiance est notre plus grande réussite.</p><p className="text-[15px] text-[#4b638c]">Des centaines de clients satisfaits nous recommandent.</p></div></div>
          <div className="flex items-center gap-4 border-y border-sky-200 py-4 lg:border-x lg:border-y-0 lg:px-12 lg:py-0"><div className="flex text-amber-500">{Array.from({ length: 5 }).map((_, index) => <Star key={index} aria-hidden="true" className="h-6 w-6 fill-current" />)}</div><p className="text-[14px] leading-[1.35] text-[#4b638c]"><strong className="block text-[#092157]">+10 ans d’expérience</strong>dans la plomberie</p></div>
          <a href="#contact" className="inline-flex h-14 items-center gap-3 rounded-lg bg-sky-500 px-7 text-[17px] font-semibold text-white shadow-[0_8px_18px_rgba(14,165,233,0.23)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-[0_12px_24px_rgba(14,165,233,0.32)]"><Phone aria-hidden="true" className="h-5 w-5" />Demander un devis</a>
        </motion.div>
      </div>
    </section>
  );
}
