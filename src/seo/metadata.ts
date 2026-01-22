/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import { SITE } from "./site";
import { Locale } from "../i18n/routing";

const LOCALES: Locale[] = ["es", "en"];

export function buildAlternates(pathnameInternal: "/" | "/about" | "/contact") {
  const languages: Record<string, string> = {};

  // Ojo: las URLs finales las produce next-intl routing.
  // Aquí solo construimos convenciones:
  const map: Record<typeof pathnameInternal, Record<Locale, string>> = {
    "/": { es: "/es", en: "/en" },
    "/about": { es: "/es/nosotros", en: "/en/about" },
    "/contact": { es: "/es/contacto", en: "/en/contact" },
  };

  for (const locale of LOCALES) {
    languages[locale] = new URL(
      map[pathnameInternal][locale],
      SITE.url,
    ).toString();
  }

  return {
    canonical: languages.es, // elige canonical por locale más abajo
    languages,
    // Importante para clusters multiidioma
    "x-default": new URL("/es", SITE.url).toString(),
  } as const;
}

export function baseRobots() {
  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // OJO: No bloquees imágenes si te importa Google Images
      // Ajusta a tu caso.
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  } as const;
}

export function makePageMetadata(args: {
  locale: Locale;
  internalPath: "/" | "/about" | "/contact";
  title: string;
  description: string;
}): Metadata {
  const { locale, internalPath, title, description } = args;
  const alternates = buildAlternates(internalPath);

  // Canonical debe apuntar a la versión correcta del idioma
  const canonical = (alternates.languages as any)[locale] as string;

  return {
    metadataBase: new URL(SITE.url),

    title,
    description,

    alternates: {
      canonical,
      languages: alternates.languages,
      // @ts-expect-error: Next soporta x-default como string key
      "x-default": alternates["x-default"],
    },

    robots: baseRobots(),

    openGraph: {
      type: "website",
      siteName: SITE.name,
      title,
      description,
      url: canonical,
      locale,
      images: [
        {
          url: new URL(`/${locale}/opengraph-image`, SITE.url).toString(),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: SITE.twitter,
      title,
      description,
      images: [new URL(`/${locale}/twitter-image`, SITE.url).toString()],
    },
  };
}
