"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

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
    name: "Javier M.",
    city: "Bilbao",
    type: "Particular",
  },

  {
    quote:
      "Recurrimos a sus servicios para la renovación completa de nuestro baño. ¡Resultado por encima de nuestras expectativas! Equipo serio, trabajo cuidado y plazos respetados. ¡Muchas gracias!",
    name: "Laura G.",
    city: "Bilbao",
    type: "Particular",
  },

  {
    quote:
      "Excelente experiencia con esta empresa. Muy buenos consejos profesionales e intervención muy rápida para desatascar nuestras tuberías. ¡Servicio 24/7 realmente excelente!",
    name: "Carlos R.",
    city: "Bilbao",
    type: "Particular",
  },

  {
    quote:
      "Trabajamos regularmente con este equipo en nuestras obras. Siempre fiables, receptivos y profesionales. Un socio de confianza para todas nuestras necesidades de fontanería.",
    name: "Construcciones Martín",
    city: "Bilbao",
    type: "Profesional",
  },

  {
    quote:
      "Un servicio impecable, desde el primer contacto hasta el final de las obras. El equipo escuchó nuestras necesidades y nos dio consejos muy útiles.",
    name: "Marta S.",
    city: "Bilbao",
    type: "Particular",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const visibleTestimonials = Array.from(
    { length: 3 },
    (_, index) => testimonials[(activeIndex + index) % testimonials.length],
  );

  const showPrevious = () => {
    setDirection(-1);
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  };
  const showNext = () => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const goToReview = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#f5f7f8] px-5 py-16 sm:px-8 sm:py-20 lg:px-0 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-[#dbe2e6]" />
      <div className="pointer-events-none absolute right-[-8%] top-16 -z-10 h-72 w-72 rounded-full border border-[#dce5e8]" />
      <div className="pointer-events-none absolute right-[3%] top-28 -z-10 h-44 w-44 rounded-full border border-[#dce5e8]" />

      <div className="mx-auto max-w-[1380px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid gap-8 border-b border-[#dbe2e6] pb-10 lg:grid-cols-[1fr_auto] lg:items-end lg:pb-12"
        >
          <div className="max-w-[700px]">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#a77800]">
              Experiencias reales
            </p>
            <h2 className="mt-4 text-[32px] font-extrabold leading-[1.1] tracking-[-0.045em] text-[#142850] sm:text-[52px]">
              Lo que dicen quienes ya han contado con nosotros.
            </h2>
          </div>
          <div className="flex items-center gap-3 lg:pb-1">
            <div
              className="flex gap-0.5 text-gold-500"
              aria-label="5 de 5 estrellas"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  aria-hidden="true"
                  className="h-4 w-4 fill-current"
                />
              ))}
            </div>
            <span className="h-4 w-px bg-[#cbd5dc]" />
            <p className="text-sm font-semibold text-[#38506f]">
              Clientes de Bilbao
            </p>
          </div>
        </motion.div>

        <div className="mt-10 sm:mt-12">
          <div className="mb-5 flex items-center justify-between sm:mb-6">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#58708a]">
              Opiniones {String(activeIndex + 1).padStart(2, "0")}
              <span className="px-1 text-[#b8c4cb]">/</span>
              {String(testimonials.length).padStart(2, "0")}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Mostrar opiniones anteriores"
                className="flex h-11 w-11 items-center justify-center border border-[#d5e0e3] bg-white text-marino-500 transition hover:border-marino-500 hover:bg-marino-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marino-500"
              >
                <ArrowLeft className="h-5 w-5" strokeWidth={2.2} />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Mostrar opiniones siguientes"
                className="flex h-11 w-11 items-center justify-center border border-marino-500 bg-marino-500 text-white transition hover:bg-marino-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marino-500"
              >
                <ArrowRight className="h-5 w-5" strokeWidth={2.2} />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: direction * 36 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -36 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="grid gap-4 md:grid-cols-3 xl:gap-6"
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.article
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, delay: index * 0.06 }}
                    className="relative flex min-h-[270px] flex-col overflow-hidden border border-[#dfe6e9] bg-white px-6 py-6 sm:min-h-[285px] sm:px-7 sm:py-7"
                  >
                    <span className="absolute left-0 top-0 h-full w-1 bg-gold-500" />
                    <Quote
                      aria-hidden="true"
                      className="h-7 w-7 fill-[#dbe7ea] text-[#dbe7ea]"
                      strokeWidth={1.5}
                    />
                    <p className="mt-6 text-[17px] leading-[1.75] text-[#233b61]">
                      {testimonial.quote}
                    </p>
                    <div className="mt-auto flex items-center gap-3 border-t border-[#e2e8eb] pt-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8eff0] text-sm font-bold text-marino-500">
                        {testimonial.name.charAt(0)}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[15px] font-bold text-[#142850]">
                          {testimonial.name}
                        </p>
                        <p className="mt-0.5 text-[13px] text-[#58708a]">
                          {testimonial.city}
                          <span className="px-1 text-[#aab8c2]">/</span>
                          {testimonial.type}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="mt-6 flex justify-center gap-2"
            aria-label="Seleccionar opinión"
          >
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => goToReview(index)}
                aria-label={`Mostrar opinión de ${testimonial.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-1.5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marino-500 ${
                  index === activeIndex
                    ? "w-8 bg-marino-500"
                    : "w-3 bg-[#c4d0d5] hover:bg-[#8296a3]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
