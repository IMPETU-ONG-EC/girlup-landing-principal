/* eslint-disable @typescript-eslint/no-explicit-any */
import { Locale } from "@/src/i18n/routing";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { NavItems } from "../constants/app.constants";

export async function Footer({ locale }: Readonly<{ locale: Locale }>) {
  const t = await getTranslations({ locale, namespace: "NavItems" });
  return (
    <footer className="w-full bg-white dark:bg-background-dark border-t border-[#f2f0f5] dark:border-gray-800 pt-16 pb-8">
      <div className="layout-container flex justify-center w-full">
        <div className="w-full max-w-[1280px] px-4 md:px-10 flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-primary">
                <span className="font-bold text-lg text-[#141118] dark:text-white">
                  Girl Up Ecuador
                </span>
              </div>
              <p className="text-sm text-[#141118]/60 dark:text-gray-400">
                Unidos por la igualdad, liderados por la juventud.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-[#141118] dark:text-white">
                Explorar
              </h4>
              {NavItems.map(({ href, labelKey }) => {
                return (
                  <Link
                    href={href}
                    className="text-sm text-[#141118]/70 dark:text-gray-400 hover:text-primary transition-colors"
                    key={labelKey}
                  >
                    {t(labelKey as any)}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-[#141118] dark:text-white">
                Involúcrate
              </h4>
              <a
                className="text-sm text-[#141118]/70 dark:text-gray-400 hover:text-primary transition-colors"
                href="#"
              >
                Voluntariado
              </a>
              <a
                className="text-sm text-[#141118]/70 dark:text-gray-400 hover:text-primary transition-colors"
                href="#"
              >
                Donaciones
              </a>
              <a
                className="text-sm text-[#141118]/70 dark:text-gray-400 hover:text-primary transition-colors"
                href="#"
              >
                Alianzas
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-[#141118] dark:text-white">
                Síguenos
              </h4>
              <div className="flex gap-4">
                <a
                  className="text-[#141118]/60 dark:text-gray-400 hover:text-primary transition-colors"
                  href="#"
                >
                  <span className="text-sm font-bold">IG</span>
                </a>
                <a
                  className="text-[#141118]/60 dark:text-gray-400 hover:text-primary transition-colors"
                  href="#"
                >
                  <span className="text-sm font-bold">FB</span>
                </a>
                <a
                  className="text-[#141118]/60 dark:text-gray-400 hover:text-primary transition-colors"
                  href="#"
                >
                  <span className="text-sm font-bold">X</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#f2f0f5] dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#141118]/40 dark:text-gray-600">
              © 2024 Girl Up Ecuador. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a
                className="text-xs text-[#141118]/40 dark:text-gray-600 hover:text-primary"
                href="#"
              >
                Política de Privacidad
              </a>
              <a
                className="text-xs text-[#141118]/40 dark:text-gray-600 hover:text-primary"
                href="#"
              >
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
