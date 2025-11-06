import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import {TopBar} from "@/components/TopBar/topBar";
import { GoogleTagManager } from './gtm'
import Footer from "@/components/Footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Raça Distribuição",
  description:
    "A Raça Distribuição é referência em distribuição de alimentos, bebidas e produtos de consumo. Atendemos com excelência em todo o Brasil.",
  keywords: [
    "Raça Distribuição",
    "distribuidora",
    "alimentos",
    "bebidas",
    "atacado",
    "varejo",
    "qualidade"
  ],
  openGraph: {
    title: "Raça Distribuição – Distribuidora de Alimentos e Bebidas",
    description:
      "Conheça a Raça Distribuição: excelência em logística e entrega de produtos de qualidade em todo o país.",
    url: "https://www.racadist.com.br",
    siteName: "Raça Distribuição",
    locale: "pt_BR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://www.racadist.com.br"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}  antialiased`}
      >
        <GoogleTagManager />
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
