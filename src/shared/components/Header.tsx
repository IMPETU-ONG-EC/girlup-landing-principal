import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MINIMUN_PADDING_SECTIONS } from "@/src/shared/constants/styled";
import { cn } from "@/lib/utils";
import { Locale } from "@/src/i18n/routing";
import { getTranslations } from "next-intl/server";

export async function Header({
  locale
}: {
  locale: Locale
}) {
  
  const t = await getTranslations({locale, namespace: 'NavItems'});
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60",
        MINIMUN_PADDING_SECTIONS,
      )}
    >
      <div className=" w-full mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600">
            <span className="text-sm font-bold text-white">GU</span>
          </div>
          <span className="text-lg font-semibold">Girl Up Ecuador</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#inicio"
            className="text-sm font-medium transition-colors hover:text-purple-600"
          >
            {t('home')}
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-purple-600"
          >
            Nosotros
          </Link>
          <Link
            href="#proyectos"
            className="text-sm font-medium transition-colors hover:text-purple-600"
          >
            Proyectos
          </Link>
          <Link
            href="#noticias"
            className="text-sm font-medium transition-colors hover:text-purple-600"
          >
            Noticias
          </Link>
          <Link
            href="#contacto"
            className="text-sm font-medium transition-colors hover:text-purple-600"
          >
            Contacto
          </Link>
        </nav>

        <Button className="bg-purple-600 text-white hover:bg-purple-700">
          Donar
        </Button>
      </div>
    </header>
  );
}
