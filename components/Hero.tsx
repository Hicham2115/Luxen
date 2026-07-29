"use client";

import { motion } from "motion/react";
import { ArrowRight, MessageCircle, Play } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroImage from "@/app/assets/hero.png";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-155 items-center overflow-hidden bg-[#06265a] py-24 sm:min-h-175 lg:min-h-200">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={heroImage.src}
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto w-full max-w-317.5 px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-160"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-1.5 text-[13px] font-bold uppercase tracking-wide text-[#06265a]">
            Servicios profesionales a su servicio
          </p>
          <h1 className="mt-6 text-[clamp(2.35rem,6vw,4rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
            Su Experto en
            <br />
            Fontanería y Calefacción,
            <br />
            a Su Servicio
          </h1>
          <p className="mt-6 max-w-120 text-[clamp(1.05rem,2vw,1.25rem)] leading-[1.6] text-white/80">
            Soluciones de fontanería y calefacción rápidas, fiables y
            duraderas para su confort diario.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 gap-3 rounded-full bg-gold-500 px-7 text-[16px] font-semibold text-[#06265a] shadow-[0_12px_26px_rgba(0,0,0,0.28)] hover:bg-gold-600",
              )}
            >
              Solicitar presupuesto{" "}
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 gap-3 rounded-full border-transparent bg-white px-6 text-[16px] font-semibold text-[#09245a] hover:bg-white/90",
              )}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-marino-500">
                <Play
                  aria-hidden="true"
                  className="ml-0.5 h-3 w-3 fill-marino-500 text-marino-500"
                />
              </span>
              Saber más
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <div className="flex items-center gap-4 rounded-full bg-white/10 py-2 pl-3 pr-6 backdrop-blur-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500 text-[14px] font-extrabold text-[#06265a]">
                10+
              </span>
              <span className="whitespace-nowrap text-[14px] font-medium leading-[1.3] text-white">
                Años de experiencia
              </span>
            </div>
            <a
              href="https://wa.me/212612345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(37,211,102,0.35)] hover:bg-[#20bd5a]"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
