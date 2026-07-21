"use client";

import { useState } from "react";
import Link from "next/link";
import { Droplet, Menu, Phone, Wrench, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Accueil", href: "#" },
  { label: "Nos Services", href: "#services" },
  { label: "À Propos", href: "#about" },
  { label: "Nos Réalisations", href: "#realisations" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white">
      <div className="mx-auto flex h-20 max-w-[1270px] items-center justify-between gap-4 px-5 sm:px-8 lg:h-[104px] lg:px-0">
        <Link href="/" className="flex items-center gap-3" aria-label="Luxen, accueil">
          <span className="relative flex h-11 w-11 items-center justify-center text-sky-500">
            <Droplet aria-hidden="true" strokeWidth={2.5} className="h-11 w-11" />
            <Wrench aria-hidden="true" strokeWidth={2.4} className="absolute bottom-1 h-5 w-5 rounded-full bg-white p-0.5" />
          </span>
          <span className="flex flex-col leading-[0.9] tracking-tight">
            <span className="text-[22px] font-extrabold text-[#08285a]">LUXEN</span>
          </span>
        </Link>

        <nav className="hidden h-full items-center gap-13 lg:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                index === 0
                  ? "relative flex h-full items-center text-[15px] font-medium text-sky-500 after:absolute after:bottom-[22px] after:left-0 after:h-0.5 after:w-full after:bg-sky-500"
                  : "flex h-full items-center text-[15px] font-medium text-[#071d4d] transition-colors hover:text-sky-500"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:0612345678"
          className={cn(
            buttonVariants({ size: "lg" }),
            "hidden h-[53px] min-w-[220px] gap-3 rounded-xl bg-sky-500 px-5 text-[17px] font-semibold text-white shadow-[0_12px_28px_rgba(14,165,233,0.2)] hover:bg-sky-600 lg:inline-flex"
          )}
        >
          <Phone aria-hidden="true" className="h-5 w-5" />
          06 123 456 78
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground lg:hidden"
        >
          {isMenuOpen ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-border px-4 py-4 lg:hidden">
          {navLinks.map((link, index) => (
            <Link key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} className={index === 0 ? "rounded-lg px-3 py-2 text-sm font-medium text-sky-500" : "rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"}>
              {link.label}
            </Link>
          ))}
          <a href="tel:0612345678" className={cn(buttonVariants({ size: "lg" }), "mt-2 gap-2 rounded-full bg-sky-500 text-white hover:bg-sky-600")}>
            <Phone aria-hidden="true" className="h-4 w-4" /> 06 123 456 78
          </a>
        </nav>
      )}
    </header>
  );
}
