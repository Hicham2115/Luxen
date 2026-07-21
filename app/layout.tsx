import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { LenisProvider } from "@/components/LenisProvider";
import { LoadingScreen } from "@/components/LoadingScreen";
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
        <LoadingScreen />
        <LenisProvider>
          <Header />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
