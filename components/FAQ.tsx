"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  CalendarClock,
  ClipboardList,
  MapPin,
  MessageCircleQuestion,
  Phone,
  PhoneCall,
  Plus,
  ShieldCheck,
  Minus,
  BadgeCheck,
  Clock3,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import heroImage from "@/app/assets/hero.png";

type FaqItem = { icon: LucideIcon; question: string; answer: string };

const faqs: FaqItem[] = [
  {
    icon: MessageCircleQuestion,
    question: "¿Cuánto cuesta una intervención de fontanería?",
    answer:
      "El coste depende de la naturaleza de la intervención. Siempre ofrecemos un presupuesto gratuito y detallado antes de comenzar los trabajos, sin ningún compromiso.",
  },
  {
    icon: PhoneCall,
    question: "¿Ofrecen un servicio de urgencia 24/7?",
    answer:
      "Sí, nuestro equipo está disponible las 24 horas, los 7 días de la semana, incluidos festivos, para todas sus urgencias de fontanería.",
  },
  {
    icon: MapPin,
    question: "¿Intervienen en toda mi región?",
    answer:
      "Intervenimos en toda la región y sus alrededores. Contáctenos para confirmar nuestra disponibilidad en su zona.",
  },
  {
    icon: ClipboardList,
    question: "¿El presupuesto es realmente gratuito?",
    answer:
      "Sí, el presupuesto es totalmente gratuito y sin compromiso. Solo paga si acepta nuestra propuesta.",
  },
  {
    icon: ShieldCheck,
    question: "¿Sus trabajos están garantizados?",
    answer:
      "Todas nuestras intervenciones están garantizadas. Nos comprometemos con la calidad y la durabilidad de nuestros trabajos.",
  },
  {
    icon: CalendarClock,
    question: "¿Cuáles son sus plazos de intervención?",
    answer:
      "Para las urgencias, solemos intervenir en 30 minutos a 1 hora. Para otras solicitudes, se fija una cita según su disponibilidad.",
  },
];

const trustPoints = [
  { icon: BadgeCheck, title: "Presupuesto gratuito", text: "Sin compromiso" },
  { icon: Clock3, title: "Disponible 24/7", text: "Incluso festivos" },
  {
    icon: ShieldCheck,
    title: "Garantía de satisfacción",
    text: "Trabajo limpio y duradero",
  },
  {
    icon: UsersRound,
    title: "Fontaneros certificados",
    text: "Profesionales cualificados",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-24"
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
            Preguntas frecuentes
          </p>
          <h2 className="mt-5 text-[38px] font-extrabold tracking-[-0.055em] text-[#06265a] sm:text-[48px]">
            Sus preguntas, <span className="text-marino-500">nuestras respuestas</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-[1.65] text-[#4b638c]">
            Encuentre las respuestas a las preguntas más frecuentes. Si no
            encuentra su respuesta,{" "}
            <a
              href="#contact"
              className="font-semibold text-marino-500 hover:text-marino-600"
            >
              ¡contáctenos!
            </a>
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start lg:gap-10">
          <div className="flex flex-col gap-4">
            {faqs.map(({ icon: Icon, question, answer }, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={question}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.06,
                  }}
                  className="rounded-2xl border border-[#e7eef5] bg-white shadow-[0_6px_16px_rgba(11,49,96,0.06)] transition-colors duration-300 hover:border-marino-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-marino-50 text-marino-500">
                      <Icon
                        aria-hidden="true"
                        strokeWidth={1.8}
                        className="h-5 w-5"
                      />
                    </span>
                    <span className="flex-1 text-[17px] font-bold text-[#071e51]">
                      {question}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center text-marino-500">
                      {isOpen ? (
                        <Minus aria-hidden="true" className="h-5 w-5" />
                      ) : (
                        <Plus aria-hidden="true" className="h-5 w-5" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 pl-[84px] text-[15px] leading-[1.7] text-[#4b638c]">
                          {answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src={heroImage}
                alt="Fontanero profesional en intervención"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "78% center" }}
              />
            </div>
            {/* <div className="relative z-10 -mt-16 w-[calc(100%-1.5rem)] rounded-2xl bg-[#f3f9ff] px-7 py-7 text-center shadow-[0_14px_34px_rgba(9,42,83,0.14)]">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-marino-100 text-marino-500">
                <Phone aria-hidden="true" strokeWidth={1.8} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-[19px] font-bold leading-[1.3] text-[#071e51]">
                ¿Otra pregunta?
                <br />
                <span className="text-marino-500">Estamos aquí para usted.</span>
              </h3>
              <p className="mx-auto mt-3 max-w-[320px] text-[14px] leading-[1.6] text-[#4b638c]">
                Nuestro equipo está disponible las 24 horas, los 7 días de la
                semana, para responder a todas sus preguntas y urgencias de fontanería.
              </p>
              <a
                href="tel:0612345678"
                className="mx-auto mt-5 inline-flex h-12 items-center gap-3 rounded-lg bg-marino-500 px-7 text-[16px] font-semibold text-white shadow-[0_8px_18px_rgba(20,40,80,0.23)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-marino-600 hover:shadow-[0_12px_24px_rgba(20,40,80,0.32)]"
              >
                <Phone aria-hidden="true" className="h-5 w-5" />
                06 12 34 56 78
              </a>
              <a
                href="#contact"
                className="mt-3 flex items-center justify-center gap-2 text-[14px] font-semibold text-marino-500 hover:text-marino-600"
              >
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
                Contáctenos
              </a>
            </div> */}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 rounded-2xl bg-[#f3f9ff] px-7 py-6 sm:grid-cols-4"
        >
          {trustPoints.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-marino-500 shadow-sm">
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.8}
                  className="h-5 w-5"
                />
              </span>
              <div>
                <p className="text-[14px] font-bold text-[#091e51]">{title}</p>
                <p className="text-[14px] text-[#4b638c]">{text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
