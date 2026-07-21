"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  Clock,
  Droplet,
  Flame,
  Hammer,
  Play,
  ShieldCheck,
  Timer,
  Wrench,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroImage from "@/app/assets/hero.png";

const features = [
  { icon: Clock, label: "Intervention rapide" },
  { icon: ShieldCheck, label: "Travail de qualité" },
  { icon: Droplet, label: "Solutions durables" },
  { icon: Timer, label: "Service 24h/24" },
];

const services = [
  { icon: Wrench, title: "Installation", subtitle: "Neuf & Rénovation" },
  { icon: Hammer, title: "Dépannage", subtitle: "Rapide & Efficace" },
  { icon: Droplet, title: "Entretien", subtitle: "Préventif" },
  { icon: Flame, title: "Chauffe-eau", subtitle: "Installation & Réparation" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8fbfe] lg:min-h-200">
      <Image
        src={heroImage}
        alt="Plombier réparant une installation sous un évier"
        fill
        preload
        sizes="100vw"
        className="absolute inset-0 -z-20 hidden object-cover object-[62%_center] lg:block"
      />
      <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,0.98)_22%,rgba(255,255,255,0.76)_39%,rgba(255,255,255,0.1)_58%,rgba(255,255,255,0)_100%)] lg:block" />

      <div className="mx-auto max-w-[1270px] px-5 pt-12 sm:px-8 md:pt-16 lg:px-0 lg:pt-[58px]">
        <div className="relative lg:min-h-145">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 mx-auto max-w-[720px] text-center lg:mx-0 lg:max-w-[590px] lg:text-left"
          >
            <h1 className="text-[clamp(2.35rem,8vw,5rem)] font-extrabold leading-[1.04] tracking-[-0.055em] text-[#06265a] lg:text-[60px]">
              Votre expert
              <br />
              en plomberie,
              <br />
              <span className="text-sky-500">à votre service</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[620px] text-[clamp(1.05rem,2.8vw,1.65rem)] leading-[1.6] text-[#45618d] lg:mx-0 lg:mt-5 lg:max-w-[480px] lg:text-[18px]">
              Des solutions de plomberie rapides, fiables et durables pour votre
              confort au quotidien.
            </p>

            <div className="mx-auto mt-8 grid max-w-[760px] grid-cols-4 gap-2 sm:gap-4 lg:mx-0 lg:mt-7 lg:max-w-[540px] lg:gap-0">
              {features.map(({ icon: Icon, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + index * 0.1 }}
                  className="flex min-h-[118px] flex-col items-center justify-center gap-2 rounded-2xl border border-[#e7edf5] bg-white px-1.5 text-center shadow-[0_8px_22px_rgba(7,47,93,0.06)] sm:min-h-[150px] sm:px-3 lg:min-h-[108px] lg:rounded-none lg:border-0 lg:border-r lg:bg-transparent lg:shadow-none lg:last:border-r-0"
                >
                  <span className="flex h-10 w-10 items-center justify-center text-sky-500 sm:h-16 sm:w-16 lg:rounded-xl lg:bg-white lg:shadow-[0_10px_22px_rgba(7,47,93,0.06)]">
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.8}
                      className="h-7 w-7 sm:h-9 sm:w-9 lg:h-8 lg:w-8"
                    />
                  </span>
                  <span className="max-w-[150px] text-[clamp(0.72rem,2vw,1.1rem)] font-semibold leading-[1.35] text-[#09245a] lg:max-w-[100px] lg:text-[14px] lg:font-medium lg:leading-[1.4]">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
              className="mx-auto mt-8 flex w-full max-w-[565px] flex-col gap-4 lg:mx-0 lg:mt-7 lg:flex-row lg:max-w-none lg:items-center"
            >
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-16 w-full gap-3 rounded-2xl bg-sky-500 px-7 text-[clamp(1rem,2.5vw,1.35rem)] font-semibold text-white shadow-[0_12px_26px_rgba(14,165,233,0.24)] hover:bg-sky-600 lg:h-[55px] lg:w-auto lg:rounded-xl lg:text-[16px]",
                )}
              >
                Demander un devis{" "}
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </a>
              <a
                href="#services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-16 w-full gap-3 rounded-2xl border-[#dce4ef] bg-white px-6 text-[clamp(1rem,2.5vw,1.35rem)] font-semibold text-[#09245a] shadow-[0_8px_20px_rgba(9,42,83,0.1)] hover:bg-sky-50 lg:h-[55px] lg:w-auto lg:rounded-xl lg:text-[16px] lg:shadow-sm",
                )}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-sky-500">
                  <Play
                    aria-hidden="true"
                    className="ml-0.5 h-3 w-3 fill-sky-500 text-sky-500"
                  />
                </span>
                Découvrir nos services
              </a>
            </motion.div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative -mx-5 mt-8 aspect-4/5 overflow-hidden sm:-mx-8 sm:mt-12 sm:aspect-video lg:hidden"
        >
          <Image
            src={heroImage}
            alt="Plombier réparant une installation sous un évier"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "72% center" }}
          />

          <div className="absolute bottom-5 left-5 w-28 rounded-2xl bg-sky-500 px-3 py-4 text-center text-white shadow-[0_12px_28px_rgba(14,165,233,0.28)] sm:bottom-7 sm:left-7 sm:w-42 sm:px-4 sm:py-5">
            <p className="text-[30px] font-extrabold leading-none tracking-tight sm:text-[48px]">
              10+
            </p>
            <p className="mt-1.5 text-[12px] font-medium leading-[1.3] sm:mt-2 sm:text-[16px]">
              Années
              <br />
              d&apos;expérience
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          className="absolute bottom-[143px] left-1/2 z-10 hidden w-[124px] -translate-x-[124px] rounded-xl bg-sky-500 px-3 py-4 text-center text-white shadow-[0_14px_30px_rgba(14,165,233,0.28)] lg:block"
        >
          <p className="text-[42px] font-extrabold leading-none tracking-tight">
            10+
          </p>
          <p className="mt-2 text-[14px] font-medium leading-[1.3]">
            Années
            <br />
            d&apos;expérience
          </p>
        </motion.div>

        <div className="relative z-10 mt-10 grid grid-cols-2 gap-x-4 gap-y-5 rounded-2xl bg-white px-5 py-5 shadow-[0_18px_45px_rgba(9,42,83,0.12)] sm:grid-cols-4 lg:mt-10 lg:h-[86px] lg:gap-0 lg:px-6 lg:py-0 lg:divide-x lg:divide-[#e1e9f2]">
          {services.map(({ icon: Icon, title, subtitle }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              className="group flex items-center gap-3 transition-colors duration-300 hover:bg-sky-50 lg:px-9 first:pl-4 last:pr-3"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center text-sky-500 transition-transform duration-300 group-hover:scale-110">
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.8}
                  className="h-7 w-7"
                />
              </span>
              <div>
                <p className="text-[14px] font-bold text-[#091e51]">{title}</p>
                <p className="mt-px text-[14px] text-[#49628c]">{subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
