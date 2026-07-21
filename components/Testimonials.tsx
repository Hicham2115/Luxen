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
import workersImage from "@/app/assets/workers.png";

type Testimonial = {
  quote: string;
  name: string;
  city: string;
  type: string;
  position: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Intervention rapide pour une fuite de chasse d’eau. Le plombier était ponctuel, professionnel et très sympathique. Travail impeccable et prix honnête. Je recommande les yeux fermés !",
    name: "Yassine B.",
    city: "Casablanca",
    type: "Particulier",
    position: "50% 28%",
  },
  {
    quote:
      "Nous avons fait appel à leurs services pour la rénovation complète de notre salle de bain. Résultat au-delà de nos attentes ! Équipe sérieuse, travail soigné et respect des délais. Un grand merci !",
    name: "Imane K.",
    city: "Rabat",
    type: "Particulier",
    position: "50% 30%",
  },
  {
    quote:
      "Excellente expérience avec cette entreprise. De très bons conseils professionnels et intervention très rapide pour déboucher nos canalisations. Service 24/7 vraiment au top !",
    name: "Mehdi T.",
    city: "Mohammedia",
    type: "Particulier",
    position: "50% 30%",
  },
  {
    quote:
      "Nous travaillons régulièrement avec cette équipe sur nos chantiers. Toujours fiables, réactifs et professionnels. Un partenaire de confiance pour tous nos besoins en plomberie.",
    name: "Société Bâtimex",
    city: "Casablanca",
    type: "Professionnel",
    position: "23% 28%",
  },
  {
    quote:
      "Un service irréprochable, du premier contact jusqu’à la fin des travaux. L’équipe a été à l’écoute et nous a donné des conseils très utiles.",
    name: "Nora A.",
    city: "Marrakech",
    type: "Particulier",
    position: "78% 29%",
  },
];

const highlights = [
  { icon: ShieldCheck, title: "Travail de qualité", text: "Garantie 100%" },
  { icon: Clock3, title: "Intervention rapide", text: "Disponible 24/7" },
  {
    icon: UsersRound,
    title: "Équipe certifiée",
    text: "Professionnels qualifiés",
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
          <p className="flex items-center justify-center gap-4 text-[16px] font-bold uppercase text-sky-500 before:h-px before:w-11 before:bg-sky-500 after:h-px after:w-11 after:bg-sky-500">
            Avis de nos clients
          </p>
          <h2 className="mt-5 text-[39px] font-extrabold leading-[1.13] tracking-[-0.055em] text-[#07255a] sm:text-[54px]">
            La satisfaction de nos clients
            <br className="hidden sm:block" /> est notre{" "}
            <span className="text-sky-500">plus belle réussite</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[590px] text-[17px] leading-[1.7] text-[#4b638c]">
            Découvrez les témoignages de nos clients satisfaits qui nous ont
            fait confiance pour leurs projets de plomberie.
          </p>
        </motion.div>

        <div className="relative mt-12">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Afficher les avis précédents"
            className="absolute left-[-62px] top-1/2 z-10 hidden h-[58px] w-[58px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-sky-500 shadow-[0_8px_24px_rgba(9,42,83,.12)] transition hover:-translate-x-1 hover:bg-sky-50 2xl:flex"
          >
            <ArrowLeft className="h-7 w-7" strokeWidth={2.3} />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Afficher les avis suivants"
            className="absolute right-[-62px] top-1/2 z-10 hidden h-[58px] w-[58px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-sky-500 shadow-[0_8px_24px_rgba(9,42,83,.12)] transition hover:translate-x-1 hover:bg-sky-50 2xl:flex"
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
                className="flex min-h-[430px] flex-col rounded-[19px] border border-[#e7eef5] bg-white px-7 py-7 shadow-[0_10px_24px_rgba(10,52,104,.08)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_18px_35px_rgba(12,87,158,0.15)] sm:min-h-[450px]"
              >
                <Quote
                  aria-hidden="true"
                  className="h-8 w-8 fill-sky-500 text-sky-500"
                  strokeWidth={2}
                />
                <div className="mt-5 flex gap-1 text-sky-500">
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
                  <span className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full bg-[#eef5fa]">
                    <Image
                      src={workersImage}
                      alt=""
                      fill
                      sizes="72px"
                      className="scale-[2.7] object-cover"
                      style={{ objectPosition: testimonial.position }}
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="flex items-center gap-2 truncate text-[16px] font-bold text-[#091e51]">
                      {testimonial.name}
                      <BadgeCheck
                        aria-label="Client vérifié"
                        className="h-[18px] w-[18px] shrink-0 fill-sky-500 text-white"
                      />
                    </p>
                    <p className="mt-1 text-[15px] text-[#4b638c]">
                      {testimonial.city}
                    </p>
                    <p className="mt-1 text-[15px] font-medium text-sky-500">
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
              aria-label="Afficher les avis précédents"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-sky-100 bg-white text-sky-500 shadow-sm"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Afficher les avis suivants"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-sky-100 bg-white text-sky-500 shadow-sm"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
