import React from "react";
import { SITE } from "./site";
import { Locale } from "../i18n/routing";

type JsonLdProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
};

export function JsonLd({ data }: Readonly<JsonLdProps>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function orgSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.organization.name,
    url: SITE.url,
    logo: new URL(SITE.organization.logo, SITE.url).toString(),
    sameAs: SITE.organization.sameAs,
    inLanguage: locale,
  };
}

export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: locale,
  };
}

export function webpageSchema(args: {
  locale: Locale;
  url: string;
  name: string;
  description: string;
}) {
  const { locale, url, name, description } = args;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    inLanguage: locale,
  };
}
