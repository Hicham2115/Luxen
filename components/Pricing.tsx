"use client";

import { motion } from "motion/react";
import {
  CalendarClock,
  CheckCircle2,
  Clock3,
  Layers,
  Phone,
  Wallet,
} from "lucide-react";

const standardInterventions = [
  "Duración mínima de facturación: 1 hora",
  "Cambio o instalación de un grifo",
  "Reparación de una fuga menor",
  "Desatasco simple de un desagüe o sifón",
  "Facturación adicional por tramos de 30 minutos",
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="overflow-hidden bg-[#fbfdff] px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1270px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-[700px] text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-gold-500/15 px-4 py-1.5 text-[13px] font-bold uppercase text-marino-500">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            Tarifas
          </p>
          <h2 className="mt-5 text-[38px] font-extrabold tracking-[-0.055em] text-[#06265a] sm:text-[48px]">
            Nuestras tarifas de <span className="text-marino-500">intervención</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-[17px] leading-[1.65] text-[#4b638c]">
            Trabajamos con total transparencia: solo paga por el tiempo que
            realmente utilizamos, sin costes ocultos ni sorpresas en la factura.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-center rounded-2xl bg-[linear-gradient(160deg,#06265a_0%,#0b3f85_60%,#0ea5e9_150%)] px-8 py-10 text-white shadow-[0_20px_45px_rgba(9,42,83,0.22)]"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-gold-500">
              <Wallet aria-hidden="true" strokeWidth={1.7} className="h-7 w-7" />
            </span>
            <p className="mt-6 text-[15px] font-semibold uppercase tracking-wide text-marino-100">
              Tarifa horaria
            </p>
            <p className="mt-1 text-[46px] font-extrabold leading-none tracking-[-0.03em]">
              250 MAD<span className="text-[20px] font-semibold text-marino-100">/hora</span>
            </p>
            <p className="mt-5 text-[15px] leading-[1.7] text-marino-100">
              Esta tarifa se aplica a las intervenciones estándar, con una
              duración mínima de una hora. Para trabajos de fontanería o
              calefacción más complejos, elaboramos un presupuesto específico.
              Contáctenos para conocerlo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="rounded-2xl border border-[#e4ebf3] bg-white px-8 py-8 shadow-[0_8px_20px_rgba(11,49,96,0.07)]"
          >
            <h3 className="text-[19px] font-bold text-[#071e51]">
              Intervenciones estándar
            </h3>
            <ul className="mt-5 space-y-3">
              {standardInterventions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    strokeWidth={1.8}
                    className="mt-0.5 h-5 w-5 shrink-0 text-marino-500"
                  />
                  <span className="text-[15px] leading-[1.6] text-[#3f5882]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-xl border border-[#e4ebf3] bg-white px-7 py-7 shadow-[0_6px_16px_rgba(11,49,96,0.06)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf7ff] text-marino-500">
              <Layers aria-hidden="true" strokeWidth={1.7} className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-[17px] font-bold text-[#071e51]">
              Proyectos de gran envergadura
            </h3>
            <p className="mt-2 text-[14px] leading-[1.65] text-[#4b638c]">
              Si tiene varias intervenciones o trabajos que requieren media
              jornada, un día completo o más, estamos a su disposición.
              Contáctenos para obtener un presupuesto personalizado y
              planificar su proyecto con eficacia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="rounded-xl border border-[#e4ebf3] bg-white px-7 py-7 shadow-[0_6px_16px_rgba(11,49,96,0.06)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf7ff] text-marino-500">
              <CalendarClock aria-hidden="true" strokeWidth={1.7} className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-[17px] font-bold text-[#071e51]">
              Fines de semana y festivos
            </h3>
            <p className="mt-2 text-[14px] leading-[1.65] text-[#4b638c]">
              Las intervenciones solicitadas durante los fines de semana y
              festivos están disponibles bajo tarifas especiales.
              No dude en contactarnos para más información.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-6 flex flex-col items-center justify-between gap-5 rounded-xl bg-[#edf8ff] px-7 py-5 text-center sm:flex-row sm:text-left"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-marino-500 text-white">
              <Clock3 aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[17px] font-bold text-[#092157]">
                ¿Necesita un presupuesto exacto?
              </p>
              <p className="text-[14px] text-[#4b638c]">
                Llámenos y le confirmamos la tarifa antes de intervenir.
              </p>
            </div>
          </div>
          <a
            href="tel:0612345678"
            className="inline-flex h-12 items-center gap-3 rounded-lg bg-marino-500 px-8 text-[18px] font-semibold text-white shadow-[0_8px_18px_rgba(20,40,80,0.23)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-marino-600 hover:shadow-[0_12px_24px_rgba(20,40,80,0.32)]"
          >
            <Phone aria-hidden="true" className="h-5 w-5" />
            06 123 456 78
          </a>
        </motion.div>
      </div>
    </section>
  );
}
