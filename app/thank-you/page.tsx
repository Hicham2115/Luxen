import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gracias por contactar",
  description: "Hemos recibido su mensaje y le responderemos pronto.",
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return (
    <main className="flex flex-1 items-center justify-center bg-[#fbfdff] px-5 py-24">
      <div className="max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-marino-500">
          Mensaje enviado
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#06265a] sm:text-5xl">
          Gracias por contactar con Luxen
        </h1>
        <p className="mt-5 text-lg leading-8 text-[#4b638c]">
          Hemos recibido su mensaje y le responderemos lo antes posible.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-marino-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-marino-600"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
