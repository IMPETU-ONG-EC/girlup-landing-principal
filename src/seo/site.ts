export const SITE = {
  // En Netlify usa tu dominio final. En dev puede ser localhost.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  name: "LOREM_IPSUM_SITE_NAME",
  twitter: "@LOREM_IPSUM_TWITTER",
  // Para schema.org
  organization: {
    name: "LOREM_IPSUM_ORG_NAME",
    logo: "/images/logo.png",
    sameAs: ["LOREM_IPSUM_SOCIAL_URL_1", "LOREM_IPSUM_SOCIAL_URL_2"],
  },
} as const;
