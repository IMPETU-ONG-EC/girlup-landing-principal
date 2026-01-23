import { APP_URL } from "../shared/constants/app.constants";

export const SITE = {
  // En Netlify usa tu dominio final. En dev puede ser localhost.
  url: APP_URL,
  name: "Girlup Ecuador",
  twitter: "@LOREM_IPSUM_TWITTER",
  // Para schema.org
  organization: {
    name: "Girlup Ecuador",
    logo: "/images/logo.webp",
    sameAs: ["LOREM_IPSUM_SOCIAL_URL_1", "LOREM_IPSUM_SOCIAL_URL_2"],
  },
} as const;
