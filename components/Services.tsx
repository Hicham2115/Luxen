"use client";

import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Bath, House, Phone, Pipette, ShieldCheck, ShowerHead, ThermometerSun, Wrench } from "lucide-react";
import leakImage from "@/app/assets/services/ChatGPT Image Jul 21, 2026, 12_21_54 PM.png";
import bathroomImage from "@/app/assets/services/ChatGPT Image Jul 21, 2026, 12_23_02 PM.png";
import waterHeaterImage from "@/app/assets/services/ChatGPT Image Jul 21, 2026, 12_23_47 PM.png";
import drainImage from "@/app/assets/services/ChatGPT Image Jul 21, 2026, 12_25_25 PM.png";
import kitchenImage from "@/app/assets/services/ChatGPT Image Jul 21, 2026, 12_26_07 PM.png";
import pipeImage from "@/app/assets/services/ChatGPT Image Jul 21, 2026, 12_30_11 PM.png";

const services = [
  { icon: Pipette, image: leakImage, title: "Détection et réparation de fuites", description: "Recherche précise de fuites et réparation rapide pour éviter tout dommage." },
  { icon: ShowerHead, image: bathroomImage, title: "Installation de salle de bain", description: "Conception et installation complète de salles de bain modernes et fonctionnelles." },
  { icon: ThermometerSun, image: waterHeaterImage, title: "Chauffe-eau", description: "Installation, entretien et réparation de chauffe-eau électriques et à gaz." },
  { icon: Bath, image: drainImage, title: "Débouchage de canalisations", description: "Débouchage rapide et efficace de vos éviers, WC, douches et canalisations." },
  { icon: Wrench, image: pipeImage, title: "Réparation de tuyauterie", description: "Réparation et remplacement de tuyaux endommagés ou usés." },
  { icon: House, image: kitchenImage, title: "Plomberie générale", description: "Tous vos travaux de plomberie pour la maison et les locaux professionnels." },
];

export function Services() {
  return (
    <section id="services" className="bg-white px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1270px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="flex items-center justify-center gap-5 text-[16px] font-bold uppercase tracking-tight text-sky-500 before:h-px before:w-15 before:bg-sky-300 after:h-px after:w-15 after:bg-sky-300">Nos services</p>
          <h2 className="mt-4 text-[34px] font-extrabold tracking-[-0.045em] text-[#07265b] sm:text-[42px]">
            Des solutions de <span className="text-sky-500">plomberie</span> pour tous vos besoins
          </h2>
          <p className="mx-auto mt-3 max-w-[620px] text-[17px] leading-[1.55] text-[#50678e]">Nous intervenons rapidement pour garantir votre confort<br className="hidden sm:block" /> et la qualité de vos installations.</p>
        </motion.div>

        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, image, title, description }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.1 }}
              className="group overflow-hidden rounded-xl border border-[#dfe7f0] bg-white shadow-[0_5px_14px_rgba(12,45,91,0.07)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_18px_35px_rgba(12,87,158,0.16)]">
              <div className="relative h-[178px] overflow-hidden">
                <Image src={image as StaticImageData} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="relative px-7 pb-5 pt-11 text-center">
                <span className="absolute -top-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-white text-sky-500 shadow-[0_6px_16px_rgba(12,45,91,0.12)] transition-transform duration-300 group-hover:scale-110">
                  <Icon aria-hidden="true" strokeWidth={1.7} className="h-10 w-10" />
                </span>
                <h3 className="text-[17px] font-bold text-[#071e51]">{title}</h3>
                <p className="mx-auto mt-2 min-h-[48px] max-w-[330px] text-[14px] leading-[1.45] text-[#4b638c]">{description}</p>
                <Link href="#contact" className="mt-4 inline-flex items-center gap-2 text-[14px] font-bold text-sky-500 transition-colors hover:text-sky-600">
                  En savoir plus <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-5 flex flex-col items-center justify-between gap-5 rounded-xl bg-[#eef8ff] px-7 py-5 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white"><Phone aria-hidden="true" className="h-5 w-5" /></span>
            <div><p className="text-[17px] font-bold text-[#092157]">Besoin d’une intervention rapide ?</p><p className="text-[14px] text-[#4b638c]">Nous sommes disponibles 24h/24 et 7j/7.</p></div>
          </div>
          <a href="tel:0612345678" className="inline-flex h-12 items-center gap-3 rounded-lg bg-sky-500 px-8 text-[18px] font-semibold text-white shadow-[0_8px_18px_rgba(14,165,233,0.23)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-[0_12px_24px_rgba(14,165,233,0.32)]"><Phone aria-hidden="true" className="h-5 w-5" />06 123 456 78</a>
          <div className="flex items-center gap-3 border-t border-sky-200 pt-4 sm:border-l sm:border-t-0 sm:pl-12 sm:pt-0">
            <ShieldCheck aria-hidden="true" strokeWidth={1.6} className="h-9 w-9 text-sky-500" />
            <p className="text-[14px] leading-[1.45] text-[#4b638c]"><strong className="block text-[#092157]">Devis gratuit</strong>et sans engagement</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
