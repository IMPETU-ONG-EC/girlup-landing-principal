import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { routing } from "@/src/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { JsonLd, orgSchema, websiteSchema } from "@/src/seo/jsonld";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Header } from "@/src/shared/components/Header";

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background-light dark:bg-background-dark text-[#141118] dark:text-white`}
      >
        <NextIntlClientProvider messages={messages}>
          {/* Schemas globales */}
          <JsonLd data={orgSchema(locale)} />
          <JsonLd data={websiteSchema(locale)} />
          <div className="relative flex h-auto min-h-screen w-full flex-col">
            <Header locale={locale} />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
