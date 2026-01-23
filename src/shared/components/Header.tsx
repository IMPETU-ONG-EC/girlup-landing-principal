/* eslint-disable @typescript-eslint/no-explicit-any */
import { Locale } from "@/src/i18n/routing";
import { getTranslations } from "next-intl/server";
import { NavItems } from "../constants/app.constants";
import HeaderMotion from "./animateds/HeaderMotion";

export async function Header({ locale }: Readonly<{ locale: Locale }>) {
  const t = await getTranslations({ locale, namespace: "NavItems" });

  const nav = NavItems.map(({ href, labelKey }) => ({
    href,
    label: t(labelKey as any),
    key: labelKey,
  }));
  return <HeaderMotion locale={locale} nav={nav} />;
}
