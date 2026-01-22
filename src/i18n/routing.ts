import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"] as const,
  defaultLocale: "es",

  // Queremos /es siempre
  localePrefix: "always",

  // Pathnames internos “canónicos” + mapping por locale
  // Esto permite que puedas usar href="/about" internamente y que se resuelva a:
  // - /es/nosotros
  // - /en/about
  pathnames: {
    "/": "/",
    "/about": {
      es: "/nosotros",
      en: "/about",
    },
    "/contact": {
      es: "/contacto",
      en: "/contact",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
