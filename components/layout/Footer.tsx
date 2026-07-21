"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Clock3,
  Droplet,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  Wrench,
} from "lucide-react";

const quickLinks = [
  { label: "Accueil", href: "#" },
  { label: "Nos services", href: "#services" },
  { label: "À propos", href: "#about" },
  { label: "Avis clients", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Détection et réparation de fuites",
  "Installation de salle de bain",
  "Chauffe-eau",
  "Débouchage de canalisations",
  "Réparation de tuyauterie",
  "Plomberie générale",
];

const contactRows = [
  { icon: Phone, text: "06 123 456 78", href: "tel:0612345678" },
  { icon: Mail, text: "contact@luxen.ma", href: "mailto:contact@luxen.ma" },
  { icon: MapPin, text: "Casablanca & environs" },
  { icon: Clock3, text: "24h/24, 7j/7" },
];

const socials = [
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/212612345678" },
  { icon: Globe, label: "Site web", href: "#" },
  { icon: Share2, label: "Partager", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#041b45] pt-16 text-white">
      <div className="absolute inset-x-0 top-0 -translate-y-[calc(100%-1px)] leading-none">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="h-14 w-full sm:h-20"
          aria-hidden="true"
        >
          <path
            d="M0,45 C240,95 480,0 720,20 C960,40 1200,95 1440,45 L1440,90 L0,90 Z"
            fill="#041b45"
          />
        </svg>
      </div>

      <div className="pointer-events-none absolute -right-24 -top-10 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1270px] px-5 sm:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col items-center justify-between gap-7 rounded-[1.75rem] bg-[linear-gradient(120deg,#0ea5e9_0%,#06265a_130%)] px-8 py-10 text-center shadow-[0_25px_55px_rgba(2,15,40,0.45)] sm:flex-row sm:text-left lg:px-14"
        >
          <div>
            <h3 className="text-[26px] font-extrabold leading-[1.2] tracking-[-0.03em] sm:text-[30px]">
              Une urgence plomberie ?
            </h3>
            <p className="mt-2 max-w-[420px] text-[15px] leading-[1.6] text-sky-100">
              Notre équipe intervient 24h/24 et 7j/7, où que vous soyez.
            </p>
          </div>
          <a
            href="tel:0612345678"
            className="inline-flex h-14 shrink-0 items-center gap-3 rounded-xl bg-white px-7 text-[16px] font-semibold text-[#06265a] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Phone aria-hidden="true" className="h-5 w-5 text-sky-500" />
            06 123 456 78
          </a>
        </motion.div>

        <div className="mt-16 grid gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1.1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sky-400">
                <Droplet aria-hidden="true" strokeWidth={2.5} className="h-6 w-6" />
                <Wrench
                  aria-hidden="true"
                  strokeWidth={2.4}
                  className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-[#041b45] p-0.5"
                />
              </span>
              <span className="text-[22px] font-extrabold tracking-tight">LUXEN</span>
            </Link>
            <p className="mt-5 max-w-[300px] text-[14px] leading-[1.75] text-sky-100/80">
              Votre expert en plomberie, à votre service. Des solutions
              rapides, fiables et durables pour votre confort au quotidien.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-sky-500"
                >
                  <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[15px] font-bold text-white">Navigation</p>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14px] text-sky-100/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[15px] font-bold text-white">Nos services</p>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-[14px] text-sky-100/80 transition-colors hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[15px] font-bold text-white">Contact</p>
            <ul className="mt-5 space-y-4">
              {contactRows.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sky-400">
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="text-[14px] text-sky-100/80 transition-colors hover:text-white"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-[14px] text-sky-100/80">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-[13px] text-sky-100/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Luxen. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Mentions légales
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
