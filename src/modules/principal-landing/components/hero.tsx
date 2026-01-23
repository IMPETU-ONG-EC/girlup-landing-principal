"use client";
import { cn } from "@/lib/utils";
import { MINIMUN_PADDING_SECTIONS } from "@/src/shared/constants/styled";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Home");

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.12 },
    },
  };

  const itemUp: Variants = {
    hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }, // easeOut-like
    },
  };

  return (
    <section className={cn("w-full py-5", MINIMUN_PADDING_SECTIONS)}>
      <div className="@container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={container}
          className="relative"
        >
          <motion.div
            variants={itemUp}
            className="flex flex-col md:flex-row min-h-140 gap-6 bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden relative"
            data-alt="Diverse group of young Ecuadorian women and men laughing and holding a banner outdoors"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("/images/hero-image.jpg")',
            }}
          >
            {/* background zoom/parallax suave */}
            <motion.div
              aria-hidden
              className="absolute inset-0"
              initial={{ scale: 1.02 }}
              whileInView={{ scale: 1.06 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("/images/hero-image.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* overlay para móvil */}
            <div className="absolute inset-0 bg-linear-to-t from-primary/90 to-transparent opacity-60 md:hidden" />

            <motion.div
              variants={itemUp}
              className="relative z-10 flex flex-col justify-end items-start px-6 pb-12 pt-20 md:px-16 md:pb-16 w-full md:w-2/3 lg:w-1/2"
            >
              <motion.div
                variants={container}
                className="flex flex-col gap-4 text-left"
              >
                <motion.span
                  variants={itemUp}
                  className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold w-fit uppercase tracking-wider border border-white/30"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 420, damping: 24 }}
                >
                  {t("miniBadge")}
                </motion.span>

                <motion.h1
                  variants={itemUp}
                  className="text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight drop-shadow-lg"
                >
                  {t("h1")}
                </motion.h1>

                <motion.p
                  variants={itemUp}
                  className="text-white/90 text-lg font-normal leading-relaxed max-w-125 drop-shadow-md"
                >
                  {t("description")}
                </motion.p>
              </motion.div>

              <motion.div
                variants={itemUp}
                className="flex flex-wrap gap-4 mt-8"
              >
                <motion.button
                  type="button"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 520, damping: 28 }}
                  className="flex items-center justify-center rounded-full h-12 px-8 bg-primary hover:bg-primary-dark transition-all text-white text-base font-bold shadow-lg hover:shadow-primary/40"
                >
                  <span className="truncate">{t("unete")}</span>
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 520, damping: 28 }}
                  className="flex items-center justify-center rounded-full h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 text-white text-base font-bold transition-all"
                >
                  <span className="truncate">{t("conoceProyectos")}</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
