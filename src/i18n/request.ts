import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const safeLocale = routing.locales.includes(locale as any)
    ? (locale as (typeof routing.locales)[number])
    : routing.defaultLocale;

  return {
    locale: safeLocale,
    messages: (await import(`../../messages/${safeLocale}.json`)).default,
  };
});
