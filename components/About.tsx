"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Award,
  BadgeCheck,
  CalendarDays,
  Headset,
  House,
  Target,
  UsersRound,
} from "lucide-react";
import workerImage from "@/app/assets/worker.png";

const principles = [
  {
    icon: BadgeCheck,
    title: "Nuestra misión",
    text: "Ofrecer un servicio de fontanería y calefacción de calidad superior, respetando las normas y con una atención constante a la satisfacción del cliente.",
  },
  {
    icon: Target,
    title: "Nuestra visión",
    text: "Ser la empresa de fontanería de referencia en nuestra región gracias a nuestro profesionalismo, nuestra capacidad de respuesta y nuestro compromiso con la innovación.",
  },
  {
    icon: UsersRound,
    title: "Nuestros valores",
    text: "Honestidad, transparencia, calidad del trabajo y respeto de los plazos son los valores que guían cada intervención.",
  },
];

const stats = [
  {
    icon: CalendarDays,
    value: "10+",
    label: "Años de experiencia",
    text: "Un saber hacer reconocido y cientos de clientes satisfechos.",
  },
  {
    icon: UsersRound,
    value: "1500+",
    label: "Proyectos realizados",
    text: "Intervenciones exitosas en hogares y empresas.",
  },
  {
    icon: House,
    value: "100%",
    label: "Clientes satisfechos",
    text: "Nuestro compromiso: un trabajo bien hecho y duradero.",
  },
  {
    icon: Headset,
    value: "24/7",
    label: "Disponibles",
    text: "Estamos aquí para usted, en todo momento.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1270px]">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#fbfdff] lg:min-h-[700px]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 max-w-[600px] px-7 py-12 sm:px-12 lg:px-0 lg:py-15"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-gold-500/15 px-4 py-1.5 text-[13px] font-bold uppercase text-marino-500">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              Sobre nosotros
            </p>
            <h2 className="mt-6 text-[38px] font-extrabold leading-[1.15] tracking-[-0.05em] text-[#06265a] sm:text-[49px]">
              Una empresa de fontanería y calefacción
              <br className="hidden lg:block" />{" "}
              <span className="text-marino-500">fiable y apasionada</span>
            </h2>
            <span className="mt-6 block h-1 w-13 rounded-full bg-gold-500" />
            <p className="mt-6 max-w-[550px] text-[16px] leading-[1.72] text-[#4b638c]">
              Desde hace más de 10 años, ponemos nuestra experiencia al servicio
              de particulares y profesionales. Nuestra misión es simple:
              ofrecer soluciones de fontanería y calefacción duraderas,
              eficaces y adaptadas a cada necesidad, con el mismo equipo de
              principio a fin.
            </p>
            <div className="mt-7 space-y-5">
              {principles.map(({ icon: Icon, title, text }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <span className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-xl bg-white text-marino-500 shadow-[0_7px_18px_rgba(11,49,96,0.1)]">
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.65}
                      className="h-9 w-9"
                    />
                  </span>
                  <div>
                    <h3 className="text-[17px] font-bold text-[#071e51]">
                      {title}
                    </h3>
                    <p className="mt-1 max-w-[430px] text-[14px] leading-[1.58] text-[#4b638c]">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative h-[410px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[58%]"
          >
            <Image
              src={workerImage}
              alt="Fontanero profesional"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-y-0 left-0 hidden w-40 bg-[linear-gradient(90deg,#fbfdff_0%,rgba(251,253,255,0)_100%)] lg:block" />
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className="absolute bottom-6 left-1/2 w-[min(370px,calc(100%-2rem))] -translate-x-1/2 rounded-2xl bg-marino-500 px-6 py-5 text-white shadow-[0_14px_30px_rgba(20,40,80,0.3)] lg:bottom-10 lg:left-[58%] lg:w-[400px]"
            >
              <div className="flex items-center gap-4">
                <Award
                  aria-hidden="true"
                  strokeWidth={1.6}
                  className="h-15 w-15 shrink-0"
                />
                <div>
                  <p className="text-[18px] font-bold">Calidad garantizada</p>
                  <p className="mt-2 text-[14px] leading-[1.55]">
                    Todos nuestros trabajos están garantizados.
                    <br />
                    Su satisfacción es nuestra prioridad.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
