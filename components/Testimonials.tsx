"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Clock3,
  Quote,
  ShieldCheck,
  Star,
  ThumbsUp,
  UsersRound,
} from "lucide-react";
import heroImage from "@/app/assets/hero.png";

type Testimonial = {
  quote: string;
  name: string;
  city: string;
  type: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Intervención rápida por una fuga en la cisterna. El fontanero fue puntual, profesional y muy amable. Trabajo impecable y precio justo. ¡Lo recomiendo sin dudarlo!",
    name: "Yassine B.",
    city: "Casablanca",
    type: "Particular",
  },
  {
    quote:
      "Recurrimos a sus servicios para la renovación completa de nuestro baño. ¡Resultado por encima de nuestras expectativas! Equipo serio, trabajo cuidado y plazos respetados. ¡Muchas gracias!",
    name: "Imane K.",
    city: "Rabat",
    type: "Particular",
  },
  {
    quote:
      "Excelente experiencia con esta empresa. Muy buenos consejos profesionales e intervención muy rápida para desatascar nuestras tuberías. ¡Servicio 24/7 realmente excelente!",
    name: "Mehdi T.",
    city: "Mohammedia",
    type: "Particular",
  },
  {
    quote:
      "Trabajamos regularmente con este equipo en nuestras obras. Siempre fiables, receptivos y profesionales. Un socio de confianza para todas nuestras necesidades de fontanería.",
    name: "Société Bâtimex",
    city: "Casablanca",
    type: "Profesional",
  },
  {
    quote:
      "Un servicio impecable, desde el primer contacto hasta el final de las obras. El equipo escuchó nuestras necesidades y nos dio consejos muy útiles.",
    name: "Nora A.",
    city: "Marrakech",
    type: "Particular",
  },
];

const highlights = [
  { icon: ShieldCheck, title: "Trabajo de calidad", text: "Garantía 100%" },
  { icon: Clock3, title: "Intervención rápida", text: "Disponible 24/7" },
  {
    icon: UsersRound,
    title: "Equipo certificado",
    text: "Profesionales cualificados",
  },
];

export function Testimonials() {
  const [start, setStart] = useState(0);
  const visibleTestimonials = Array.from(
    { length: 4 },
    (_, index) => testimonials[(start + index) % testimonials.length],
  );

  const showPrevious = () =>
    setStart(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  const showNext = () =>
    setStart((current) => (current + 1) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#fbfdff] px-5 py-20 sm:px-8 lg:px-0 lg:py-[82px]"
    >
      <Image
        src={heroImage}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-20 hidden object-cover object-[72%_35%] opacity-25 lg:block"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,.99)_0%,rgba(255,255,255,.95)_42%,rgba(255,255,255,.72)_68%,rgba(255,255,255,.86)_100%)]" />

      <div className="mx-auto max-w-[1380px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-[800px] text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-gold-500/15 px-4 py-1.5 text-[13px] font-bold uppercase text-marino-500">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            Opiniones de nuestros clientes
          </p>
          <h2 className="mt-5 text-[39px] font-extrabold leading-[1.13] tracking-[-0.055em] text-[#07255a] sm:text-[54px]">
            La satisfacción de nuestros clientes
            <br className="hidden sm:block" /> es nuestro{" "}
            <span className="text-marino-500">mayor logro</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[590px] text-[17px] leading-[1.7] text-[#4b638c]">
            Descubra los testimonios de nuestros clientes satisfechos que han
            confiado en nosotros para sus proyectos de fontanería.
          </p>
        </motion.div>

        <div className="relative mt-12">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Mostrar opiniones anteriores"
            className="absolute left-[-62px] top-1/2 z-10 hidden h-[58px] w-[58px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-marino-500 shadow-[0_8px_24px_rgba(9,42,83,.12)] transition hover:-translate-x-1 hover:bg-marino-50 2xl:flex"
          >
            <ArrowLeft className="h-7 w-7" strokeWidth={2.3} />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Mostrar opiniones siguientes"
            className="absolute right-[-62px] top-1/2 z-10 hidden h-[58px] w-[58px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-marino-500 shadow-[0_8px_24px_rgba(9,42,83,.12)] transition hover:translate-x-1 hover:bg-marino-50 2xl:flex"
          >
            <ArrowRight className="h-7 w-7" strokeWidth={2.3} />
          </button>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.article
                key={`${testimonial.name}-${start}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="flex min-h-[430px] flex-col rounded-[19px] border border-[#e7eef5] bg-white px-7 py-7 shadow-[0_10px_24px_rgba(10,52,104,.08)] transition-all duration-300 hover:-translate-y-2 hover:border-marino-200 hover:shadow-[0_18px_35px_rgba(12,87,158,0.15)] sm:min-h-[450px]"
              >
                <Quote
                  aria-hidden="true"
                  className="h-8 w-8 fill-marino-500 text-marino-500"
                  strokeWidth={2}
                />
                <div className="mt-5 flex gap-1 text-gold-500">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      aria-hidden="true"
                      className="h-5 w-5 fill-current"
                    />
                  ))}
                </div>
                <p className="mt-5 text-[16px] leading-[1.8] text-[#071f55]">
                  {testimonial.quote}
                </p>
                <div className="mt-auto flex items-center gap-4 border-t border-[#e6edf5] pt-5">
                  <span className="flex h-18 w-18 shrink-0 items-center justify-center rounded-full bg-marino-500 text-[26px] font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="flex items-center gap-2 truncate text-[16px] font-bold text-[#091e51]">
                      {testimonial.name}
                      <BadgeCheck
                        aria-label="Cliente verificado"
                        className="h-[18px] w-[18px] shrink-0 fill-marino-500 text-white"
                      />
                    </p>
                    <p className="mt-1 text-[15px] text-[#4b638c]">
                      {testimonial.city}
                    </p>
                    <p className="mt-1 text-[15px] font-medium text-marino-500">
                      {testimonial.type}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-3 xl:hidden">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Mostrar opiniones anteriores"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-marino-100 bg-white text-marino-500 shadow-sm"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Mostrar opiniones siguientes"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-marino-100 bg-white text-marino-500 shadow-sm"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
