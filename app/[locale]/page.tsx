import { Header } from "@/src/shared/components/Header";
import { Hero } from "@/src/modules/principal-landing/components/hero";
import { WhoWeAre } from "@/src/modules/principal-landing/components/whoWeAre";
import { FocusAreas } from "@/src/modules/principal-landing/components/focusAreas";
import { FeaturedProjects } from "@/src/modules/principal-landing/components/featuredProjects";
import type { Locale } from "@/src/i18n/routing";
import { getTranslations } from "next-intl/server";
import { makePageMetadata } from "@/src/seo/metadata";
import { SITE } from "@/src/seo/site";

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: Locale}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Home'});

  return makePageMetadata({
    locale,
    internalPath: '/',
    title: t('title'),
    description: t('description'),
  });
}

export default async function Home({
  params
}: Readonly<{
  params: Promise<{locale: Locale}>;
}>) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Home'});

  const url = new URL(`/${locale}`, SITE.url).toString();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <Hero />
      <WhoWeAre />
      <FocusAreas />
      <FeaturedProjects />
    </div>
  );
}
