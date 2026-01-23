"use client";
import { cn } from "@/lib/utils";
import { MINIMUN_PADDING_SECTIONS } from "@/src/shared/constants/styled";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Home");
  return (
    <section className={cn("w-full py-5", MINIMUN_PADDING_SECTIONS)}>
      <div className="@container">
        <div
          className="flex flex-col md:flex-row min-h-140 gap-6 bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden relative"
          data-alt="Diverse group of young Ecuadorian women and men laughing and holding a banner outdoors"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("/images/hero-image.png")',
          }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-primary/90 to-transparent opacity-60 md:hidden"></div>
          <div className="relative z-10 flex flex-col justify-end items-start px-6 pb-12 pt-20 md:px-16 md:pb-16 w-full md:w-2/3 lg:w-1/2">
            <div className="flex flex-col gap-4 text-left">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold w-fit uppercase tracking-wider border border-white/30">
                {t("miniBadge")}
              </span>
              <h1 className="text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight drop-shadow-lg">
                {t("h1")}
              </h1>
              <p className="text-white/90 text-lg font-normal leading-relaxed max-w-125 drop-shadow-md">
                {t("description")}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="flex items-center justify-center rounded-full h-12 px-8 bg-primary hover:bg-primary-dark transition-all text-white text-base font-bold shadow-lg hover:shadow-primary/40 transform hover:-translate-y-0.5">
                <span className="truncate">{t("unete")}</span>
              </button>
              <button className="flex items-center justify-center rounded-full h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 text-white text-base font-bold transition-all">
                <span className="truncate">{t("conoceProyectos")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
