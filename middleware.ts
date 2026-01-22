import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default createMiddleware({
  ...routing,
  // Recomendado: para que bots/SEO no vean variaciones por cookies
  // Si quieres detección por Accept-Language solo en '/', lo manejas aparte.
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
