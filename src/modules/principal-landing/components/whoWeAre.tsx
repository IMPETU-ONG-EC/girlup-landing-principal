"use client";
import { cn } from "@/lib/utils";
import { MINIMUN_PADDING_SECTIONS } from "@/src/shared/constants/styled";
import { useTranslations } from "next-intl";

export const WhoWeAre = () => {
  const t = useTranslations("Home");
  return (
    <section
      className={cn(
        "w-full py-16 flex flex-col gap-6 text-center",
        MINIMUN_PADDING_SECTIONS,
      )}
      id="nosotros"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="text-primary font-bold text-sm tracking-widest uppercase">
          {t("nuestraMision")}
        </span>
        <h2 className="text-[#141118] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.015em]">
          {t("quienesSomos")}
        </h2>
        <div className="w-20 h-1 bg-primary rounded-full"></div>
      </div>
      <p className="text-[#141118]/80 dark:text-gray-300 text-lg leading-relaxed max-w-180 mx-auto">
        {t("quienesSomosDescripcion")}
      </p>
    </section>
  );
};
