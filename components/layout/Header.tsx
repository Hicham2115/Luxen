"use client";

import { useState } from "react";
import Link from "next/link";
import { Droplet, Menu, Phone, Wrench, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Servicios", href: "#services" },
  { label: "Tarifas", href: "#pricing" },
  { label: "Sobre Nosotros", href: "#about" },
  { label: "Nuestros Trabajos", href: "#realisations" },
  { label: "Contacto", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgba(6,38,90,0.06),0_12px_30px_-18px_rgba(6,38,90,0.3)]">
      <div className="h-[3px] w-full bg-[linear-gradient(90deg,#d89c00_0%,#f7c948_50%,#d89c00_100%)]" />

      <div className="mx-auto flex h-16 max-w-[1270px] items-center justify-between gap-4 px-5 sm:h-20 sm:px-8 lg:h-16 lg:px-0">
        <Link href="/" className="flex items-center gap-3" aria-label="Luxen, inicio">
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#06265a_0%,#142850_100%)] text-gold-500 shadow-[0_6px_16px_rgba(20,40,80,0.35)] sm:h-13 sm:w-13 lg:h-11 lg:w-11">
            <Droplet aria-hidden="true" strokeWidth={2.2} className="h-6 w-6 sm:h-7 sm:w-7 lg:h-6 lg:w-6" />
            <Wrench aria-hidden="true" strokeWidth={2.3} className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-gold-500 p-0.5 text-marino-500 sm:h-4.5 sm:w-4.5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[20px] font-extrabold tracking-[0.04em] text-[#08285a] sm:text-[24px] lg:text-[20px]">LUXEN</span>
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-gold-600 sm:text-[10px]">Fontanería y Calefacción</span>
          </span>
        </Link>

        <nav className="hidden h-full items-center gap-10 lg:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "group relative flex h-full items-center text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors",
                index === 0 ? "text-marino-500" : "text-[#071d4d] hover:text-marino-500"
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-px left-0 h-0.5 w-full origin-center bg-gold-500 transition-transform duration-300",
                  index === 0 ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <span className="h-8 w-px bg-[#e5ebf2]" />
          <a
            href="tel:0612345678"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 gap-2.5 rounded-full bg-[linear-gradient(135deg,#06265a_0%,#0b3f85_100%)] pl-2 pr-6 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(20,40,80,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(20,40,80,0.4)]"
            )}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-500 text-[#06265a]">
              <Phone aria-hidden="true" className="h-3.5 w-3.5" />
            </span>
            06 123 456 78
          </a>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 lg:hidden">
          <a
            href="tel:0612345678"
            aria-label="Llámenos"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#06265a_0%,#0b3f85_100%)] text-white shadow-[0_10px_22px_rgba(20,40,80,0.3)] ring-2 ring-gold-500/40 sm:h-13 sm:w-13"
          >
            <Phone aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Cerrar el menú" : "Abrir el menú"}
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#08285a] transition-colors hover:bg-marino-50 sm:h-11 sm:w-11"
          >
            {isMenuOpen ? <X aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" /> : <Menu aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-[#eef1f6] bg-white px-4 py-4 lg:hidden">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={
                index === 0
                  ? "rounded-lg border-l-2 border-gold-500 bg-marino-50 px-3 py-2.5 text-sm font-semibold text-marino-500"
                  : "rounded-lg border-l-2 border-transparent px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted"
              }
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:0612345678"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-3 gap-2.5 rounded-full bg-[linear-gradient(135deg,#06265a_0%,#0b3f85_100%)] pl-2 pr-6 text-white hover:shadow-lg"
            )}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-500 text-[#06265a]">
              <Phone aria-hidden="true" className="h-3.5 w-3.5" />
            </span>
            06 123 456 78
          </a>
        </nav>
      )}
    </header>
  );
}
