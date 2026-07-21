"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ClipboardCheck, Clock3, Phone, ShieldCheck, Wrench } from "lucide-react";
import heroImage from "@/app/assets/hero.png";

const steps = [
  { icon: Phone, number: "01", title: "Contactez-nous", description: "Appelez-nous ou remplissez notre formulaire en ligne. Nous sommes à votre écoute pour comprendre vos besoins." },
  { icon: ClipboardCheck, number: "02", title: "Diagnostic & Devis", description: "Nous analysons votre situation et vous fournissons un devis gratuit, clair et sans engagement." },
  { icon: Wrench, number: "03", title: "Intervention professionnelle", description: "Nos plombiers qualifiés interviennent rapidement avec du matériel professionnel pour résoudre le problème." },
  { icon: ShieldCheck, number: "04", title: "Contrôle & Garantie", description: "Nous vérifions la qualité de notre travail et vous bénéficiez d’une garantie sur nos prestations pour votre tranquillité." },
];

export function Process() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-24">
      <Image src={heroImage} alt="" fill sizes="100vw" className="pointer-events-none absolute inset-0 -z-20 hidden object-cover object-right opacity-35 lg:block" />
      <div className="pointer-events-none absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,#fff_0%,#fff_48%,rgba(255,255,255,0.78)_72%,rgba(255,255,255,0.84)_100%)] lg:block" />
      <div className="mx-auto max-w-[1270px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="flex items-center justify-center gap-5 text-[16px] font-bold uppercase text-sky-500 before:h-px before:w-12 before:bg-sky-500 after:h-px after:w-12 after:bg-sky-500">Comment nous travaillons</p>
          <h2 className="mt-4 text-[38px] font-extrabold tracking-[-0.055em] text-[#06265a] sm:text-[54px]">Un processus <span className="text-sky-500">simple</span> et efficace</h2>
          <p className="mx-auto mt-3 max-w-[640px] text-[18px] leading-[1.55] text-[#4c638c]">Nous avons mis en place un processus clair pour garantir<br className="hidden sm:block" /> une expérience sans stress et des résultats impeccables.</p>
        </motion.div>

        <div className="mt-24 grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-18">
          {steps.map(({ icon: Icon, number, title, description }, index) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
              className="group relative min-h-[345px] rounded-xl border border-[#e4ebf3] bg-white px-7 pb-7 pt-[62px] text-center shadow-[0_8px_20px_rgba(11,49,96,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_18px_35px_rgba(12,87,158,0.15)]"
            >
              <span className="absolute -top-[44px] left-1/2 flex h-[88px] w-[88px] -translate-x-1/2 items-center justify-center rounded-full bg-white text-sky-500 shadow-[0_10px_24px_rgba(11,49,96,0.12)] transition-transform duration-300 group-hover:scale-110"><Icon aria-hidden="true" strokeWidth={1.6} className="h-[38px] w-[38px]" /></span>
              <p className="text-[28px] font-extrabold leading-none text-sky-500">{number}</p>
              <h3 className="mx-auto mt-4 max-w-[225px] text-[19px] font-bold leading-[1.2] tracking-[-0.025em] text-[#061e52]">{title}</h3>
              <span className="mx-auto mt-5 block h-0.5 w-11 bg-sky-500" />
              <p className="mt-6 text-[14px] leading-[1.65] text-[#4b638c]">{description}</p>
              {index < steps.length - 1 && <span className="absolute -right-[34px] top-[110px] z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white shadow-[0_6px_14px_rgba(14,165,233,0.3)] lg:flex"><ArrowRight aria-hidden="true" className="h-5 w-5" /></span>}
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8 flex flex-col items-center justify-between gap-6 rounded-xl bg-[#edf8ff] px-7 py-5 text-center lg:flex-row lg:text-left">
          <div className="flex items-center gap-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#dff1ff] text-sky-500"><Phone aria-hidden="true" className="h-6 w-6" /></span><div><p className="text-[16px] font-bold text-[#092157]">Besoin d’une intervention rapide ?</p><p className="text-[14px] text-[#4b638c]">Nous sommes disponibles 24h/24 et 7j/7<br className="hidden lg:block" /> pour toutes vos urgences plomberie.</p></div></div>
          <div className="flex items-center gap-4 border-y border-sky-200 py-4 lg:border-x lg:border-y-0 lg:px-14 lg:py-0"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#dff1ff] text-sky-500"><Clock3 aria-hidden="true" className="h-6 w-6" /></span><div><p className="text-[16px] font-bold text-[#092157]">Réponse rapide garantie</p><p className="text-[14px] text-[#4b638c]">Nous vous répondons en moins<br /> de 30 minutes.</p></div></div>
          <div className="text-center"><a href="tel:0612345678" className="inline-flex h-12 items-center gap-3 rounded-lg bg-sky-500 px-7 text-[17px] font-semibold text-white shadow-[0_8px_18px_rgba(14,165,233,0.23)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-[0_12px_24px_rgba(14,165,233,0.32)]"><Phone aria-hidden="true" className="h-5 w-5" />06 123 456 78</a><p className="mt-2 text-[14px] font-medium text-sky-500">Appelez-nous maintenant</p></div>
        </motion.div>
      </div>
    </section>
  );
}
