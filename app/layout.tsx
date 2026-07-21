import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/LenisProvider";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Providers } from "@/app/providers";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Luxen", template: "%s | Luxen" },
  description: "Votre expert en plomberie, à votre service.",
  openGraph: { type: "website" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Providers>
          <LoadingScreen />
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
