import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "I.E. Ricardo Palma Soriano | Unión Perené",
  description: "Portal Institucional de la I.E. Pública Ricardo Palma Soriano, Unión Perené, Chanchamayo, Junín. Educación Inicial, Primaria y Secundaria con Formación Técnica.",
  keywords: ["Colegio", "Ricardo Palma Soriano", "Unión Perené", "Chanchamayo", "Pichanaqui", "Educación Secundaria Técnica", "Perú"],
  authors: [{ name: "I.E. Ricardo Palma Soriano" }],
  openGraph: {
    title: "I.E. Ricardo Palma Soriano | Unión Perené",
    description: "Portal Institucional - Educación con valores y formación técnica en la Selva Central.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-PE"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-rp-ivory text-rp-navy">
        {children}
      </body>
    </html>
  );
}
