import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Girlup | Ecuador",
  description:
    "Movimiento juvenil que empodera a las niñas y juventud para lograr la igualdad y justicia en Ecuador. Parte de la iniciativa global de la Fundación de las Naciones Unidas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background-light dark:bg-background-dark text-[#141118] dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
