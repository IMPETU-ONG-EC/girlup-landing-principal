import { UrlTypes } from "../types/url.types";

export const APP_DOMAIN = "girlupec.com";
export const APP_URL = "https://" + APP_DOMAIN;

export const NavItems: Array<{
  href: UrlTypes;
  labelKey: string;
}> = [
  { href: "/", labelKey: "" },
  { href: "/about", labelKey: "" },
  { href: "/contact", labelKey: "" },
];
