import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/LenisProvider";
import { Providers } from "@/app/providers";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const SITE_URL = "https://www.luxen.es";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Luxen – Fontanería y Calefacción en Barakaldo",
    template: "%s | Luxen",
  },
  description:
    "Fontanero profesional en Barakaldo: detección de fugas, desatasco de tuberías, calentadores de agua, baños y urgencias 24/7. Presupuesto rápido y sin compromiso.",
  keywords: [
    "fontanero Barakaldo",
    "fontanería Barakaldo",
    "desatasco de tuberías",
    "detección de fugas",
    "calefacción Barakaldo",
    "urgencias fontanería 24 horas",
  ],
  authors: [{ name: "Luxen" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Luxen | Fontanería y Calefacción en Barakaldo",
    description:
      "Fontanero profesional en Barakaldo: detección de fugas, desatasco de tuberías, calentadores de agua, baños y urgencias 24/7.",
    url: SITE_URL,
    siteName: "Luxen",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxen | Fontanería y Calefacción en Barakaldo",
    description:
      "Fontanero profesional en Barakaldo: detección de fugas, desatasco de tuberías, calentadores de agua, baños y urgencias 24/7.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Luxen",
  image: `${SITE_URL}/opengraph-image.png`,
  url: SITE_URL,
  telephone: "+34602838607",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Barandiaran 9 bajo",
    postalCode: "48903",
    addressLocality: "Barakaldo",
    addressCountry: "ES",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Providers>
          <LenisProvider>
            <Header />
            {children}
            <Footer />
          </LenisProvider>
          <Toaster position="top-right" richColors />
        </Providers>
      </body>
    </html>
  );
}
