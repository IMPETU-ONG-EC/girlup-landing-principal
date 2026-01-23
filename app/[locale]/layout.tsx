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
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/manifests/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/manifests/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/manifests/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/manifests/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/manifests/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/manifests/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/manifests/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/manifests/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/manifests/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/manifests/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/manifests/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/manifests/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/manifests/favicon-16x16.png"
        />
        <meta
          name="msapplication-TileImage"
          content="/manifests/ms-icon-144x144.png"
        />
      </head>
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
