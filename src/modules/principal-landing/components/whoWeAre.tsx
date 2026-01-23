"use client";

import { cn } from "@/lib/utils";
import { MINIMUN_PADDING_SECTIONS } from "@/src/shared/constants/styled";
import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";

export const WhoWeAre = () => {
  const t = useTranslations("Home");

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemUp: Variants = {
    hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const lineGrow: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    show: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.12 },
    },
  };

  return (
    <motion.section
      id="nosotros"
      className={cn(
        "w-full py-16 flex flex-col gap-6 text-center",
        MINIMUN_PADDING_SECTIONS,
      )}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div
        className="flex flex-col items-center gap-4"
        variants={container}
      >
        <motion.span
          variants={itemUp}
          className="text-primary font-bold text-sm tracking-widest uppercase"
        >
          {t("nuestraMision")}
        </motion.span>

        <motion.h2
          variants={itemUp}
          className="text-[#141118] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.015em]"
        >
          {t("quienesSomos")}
        </motion.h2>

        <motion.div
          variants={lineGrow}
          className="w-20 h-1 bg-primary rounded-full origin-left"
        />
      </motion.div>

      <motion.p
        variants={itemUp}
        className="text-[#141118]/80 dark:text-gray-300 text-lg leading-relaxed max-w-180 mx-auto"
      >
        {t("quienesSomosDescripcion")}
      </motion.p>
    </motion.section>
  );
};
