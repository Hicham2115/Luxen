import type { Metadata } from "next";
import { ArrowRight, Home, Phone, Wrench } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

const quickLinks = [
  { label: "Servicios", href: "/#services" },
  { label: "Tarifas", href: "/#pricing" },
  { label: "Sobre nosotros", href: "/#about" },
  { label: "Contacto", href: "/#contact" },
];

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-155 flex-1 items-center overflow-hidden bg-[linear-gradient(160deg,#06265a_0%,#0b3f85_55%,#0ea5e9_150%)] px-5 py-24 sm:px-8">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-white/5" />

      <div className="relative mx-auto w-full max-w-160 text-center">
        <p className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-1.5 text-[13px] font-bold uppercase tracking-wide text-[#06265a]">
          <Wrench aria-hidden="true" className="h-3.5 w-3.5" />
          Error 404
        </p>

        <h1 className="mt-6 text-[clamp(3rem,10vw,6rem)] font-extrabold leading-none tracking-[-0.03em] text-white">
          404
        </h1>
        <h2 className="mt-4 text-[clamp(1.4rem,4vw,2rem)] font-extrabold leading-tight tracking-[-0.03em] text-white">
          Esta página se ha ido por el desagüe
        </h2>
        <p className="mx-auto mt-4 max-w-110 text-[16px] leading-[1.7] text-white/80">
          No hemos encontrado la página que busca. Puede que se haya movido o
          ya no exista. Vuelva al inicio o contáctenos para cualquier
          urgencia.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <a
            href="/"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-14 gap-3 rounded-full bg-gold-500 px-7 text-[16px] font-semibold text-[#06265a] shadow-[0_12px_26px_rgba(0,0,0,0.28)] hover:bg-gold-600",
            )}
          >
            <Home aria-hidden="true" className="h-5 w-5" />
            Volver al inicio
          </a>
          <a
            href="tel:602838607"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-14 gap-3 rounded-full border-transparent bg-white px-6 text-[16px] font-semibold text-[#09245a] hover:bg-white/90",
            )}
          >
            <Phone aria-hidden="true" className="h-5 w-5" />
            602 83 86 07
          </a>
        </div>

        <nav
          aria-label="Enlaces rápidos"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group inline-flex items-center gap-1 text-[14px] font-semibold text-white/80 transition-colors hover:text-white"
            >
              {link.label}
              <ArrowRight
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              />
            </a>
          ))}
        </nav>
      </div>
    </main>
  );
}
