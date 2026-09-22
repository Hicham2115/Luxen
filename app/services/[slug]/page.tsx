import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Check,
  ChevronRight,
  ClipboardCheck,
  Phone,
  ShieldCheck,
} from "lucide-react";
import leakImage from "@/app/assets/services/ChatGPT Image Jul 21, 2026, 12_21_54 PM.png";
import bathroomImage from "@/app/assets/services/ChatGPT Image Jul 21, 2026, 12_23_02 PM.png";
import waterHeaterImage from "@/app/assets/services/ChatGPT Image Jul 21, 2026, 12_23_47 PM.png";
import drainImage from "@/app/assets/services/ChatGPT Image Jul 21, 2026, 12_25_25 PM.png";
import kitchenImage from "@/app/assets/services/ChatGPT Image Jul 21, 2026, 12_26_07 PM.png";
import pipeImage from "@/app/assets/services/ChatGPT Image Jul 21, 2026, 12_30_11 PM.png";
import { getService, services } from "@/lib/services";

const serviceImages: Record<string, { image: StaticImageData; alt: string }> = {
  "deteccion-reparacion-fugas": { image: leakImage, alt: "Fontanero detectando una fuga de agua" },
  "instalacion-banos": { image: bathroomImage, alt: "Baño moderno recién instalado" },
  "calefaccion-calentadores-agua": { image: waterHeaterImage, alt: "Instalación de un calentador de agua" },
  "desatasco-tuberias": { image: drainImage, alt: "Desatasco de tuberías en curso" },
  "reparacion-tuberias": { image: pipeImage, alt: "Reparación de una tubería" },
  "fontaneria-general": { image: kitchenImage, alt: "Trabajo de fontanería general en una vivienda" },
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.heroDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const serviceImage = serviceImages[service.slug];

  return (
    <main className="flex-1 bg-white">
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#041b45_0%,#0b3f85_60%,#1375b9_140%)] px-5 py-18 sm:px-8 sm:py-22">
        <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-[1270px]">
          <nav
            aria-label="Migas de pan"
            className="flex items-center gap-2 text-[13px] text-white/70"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Inicio
            </Link>
            <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
            <Link
              href="/#services"
              className="transition-colors hover:text-white"
            >
              Servicios
            </Link>
            <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
            <span className="truncate text-white">{service.title}</span>
          </nav>
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_330px]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-1.5 text-[13px] font-bold uppercase tracking-wide text-[#06265a]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#06265a]" />{" "}
                Servicio Luxen
              </p>
              <h1 className="mt-5 max-w-3xl text-[clamp(2.25rem,5vw,4.4rem)] font-extrabold leading-[1.06] tracking-[-0.05em] text-white">
                {service.title}
              </h1>
              <p className="mt-5 max-w-2xl text-[18px] leading-[1.65] text-white/80">
                {service.heroDescription}
              </p>
              <Link
                href="/#contact"
                className="mt-8 inline-flex h-13 items-center gap-3 rounded-full bg-gold-500 px-6 text-[15px] font-bold text-[#06265a] shadow-[0_12px_26px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5 hover:bg-gold-400"
              >
                Solicitar presupuesto{" "}
                <ArrowRight aria-hidden="true" className="h-4.5 w-4.5" />
              </Link>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
              <Image
                src={serviceImage.image}
                alt={serviceImage.alt}
                fill
                sizes="(min-width: 1024px) 330px, 80vw"
                className="object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(4,27,69,0.18),transparent_60%)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-18 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-start">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-gold-600">
              Nuestro servicio
            </p>
            <h2 className="mt-3 text-[34px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#07265b]">
              Una solución clara, desde el primer diagnóstico
            </h2>
            <p className="mt-5 text-[17px] leading-[1.7] text-[#50678e]">
              {service.overview}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-xl border border-[#dfe7f0] bg-[#f8fbff] px-4 py-4 text-center text-[14px] font-bold text-[#092157]"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-2xl bg-[#eef8ff] p-7 shadow-[0_12px_30px_rgba(12,45,91,0.08)]">
            <ShieldCheck
              aria-hidden="true"
              className="h-10 w-10 text-marino-500"
              strokeWidth={1.6}
            />
            <h2 className="mt-4 text-[22px] font-extrabold text-[#092157]">
              ¿Necesita ayuda rápida?
            </h2>
            <p className="mt-2 text-[15px] leading-[1.6] text-[#4b638c]">
              Cuéntenos qué ocurre y le orientaremos con una solución y
              presupuesto sin compromiso.
            </p>
            <a
              href="tel:+34602838607"
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-marino-500 px-5 text-[15px] font-bold text-white transition-colors hover:bg-marino-600"
            >
              <Phone aria-hidden="true" className="h-4.5 w-4.5" />
              +34 602 83 86 07
            </a>
          </aside>
        </div>
      </section>

      <section className="bg-[#f6f9fc] px-5 py-18 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="max-w-2xl">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-gold-600">
              Qué incluye
            </p>
            <h2 className="mt-3 text-[34px] font-extrabold tracking-[-0.04em] text-[#07265b]">
              Todo lo necesario para resolverlo bien
            </h2>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {service.included.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl bg-white p-5 shadow-[0_4px_14px_rgba(12,45,91,0.06)]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-marino-50 text-marino-500">
                  <Check aria-hidden="true" className="h-4 w-4" />
                </span>
                <p className="pt-1 text-[15px] font-semibold text-[#092157]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-18 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-gold-600">
              Cómo trabajamos
            </p>
            <h2 className="mt-3 text-[34px] font-extrabold tracking-[-0.04em] text-[#07265b]">
              Simple, transparente y eficaz
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              [
                "01",
                "Cuéntenos su necesidad",
                "Llame o escríbanos para explicarnos el problema o proyecto.",
              ],
              [
                "02",
                "Reciba una solución",
                "Analizamos el caso y le presentamos una propuesta clara.",
              ],
              [
                "03",
                "Disfrute del resultado",
                "Realizamos el trabajo con cuidado y verificamos que todo funcione.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-[#dfe7f0] p-7"
              >
                <span className="text-[28px] font-extrabold text-gold-500">
                  {number}
                </span>
                <ClipboardCheck
                  aria-hidden="true"
                  className="mt-5 h-7 w-7 text-marino-500"
                />
                <h3 className="mt-4 text-[18px] font-extrabold text-[#092157]">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[#50678e]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#041b45] px-5 py-16 text-center sm:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-[30px] font-extrabold tracking-[-0.04em] text-white">
            ¿Hablamos de su proyecto?
          </h2>
          <p className="mt-3 text-[16px] leading-[1.65] text-white/75">
            Solicite su presupuesto gratuito y sin compromiso.
          </p>
          <Link
            href="/#contact"
            className="mt-7 inline-flex h-13 items-center gap-3 rounded-full bg-gold-500 px-7 text-[15px] font-bold text-[#06265a] transition-colors hover:bg-gold-400"
          >
            Contactar con Luxen{" "}
            <ArrowRight aria-hidden="true" className="h-4.5 w-4.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
