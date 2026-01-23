"use client";

import { motion, type Variants } from "framer-motion";
import { Heart, Scale, Sparkles, Target, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export const FocusAreas = () => {
  const t = useTranslations("Home");

  const approachItems = [
    {
      key: "genderEquality",
      Icon: Scale,
      title: t("pillars.items.genderEquality.title"),
      description: t("pillars.items.genderEquality.description"),
    },
    {
      key: "masculinities",
      Icon: Users,
      title: t("pillars.items.masculinities.title"),
      description: t("pillars.items.masculinities.description"),
    },
    {
      key: "menstrualHealth",
      Icon: Heart,
      title: t("pillars.items.menstrualHealth.title"),
      description: t("pillars.items.menstrualHealth.description"),
    },
    {
      key: "youthLeadership",
      Icon: Sparkles,
      title: t("pillars.items.youthLeadership.title"),
      description: t("pillars.items.youthLeadership.description"),
    },
    {
      key: "socialJustice",
      Icon: Target,
      title: t("pillars.items.socialJustice.title"),
      description: t("pillars.items.socialJustice.description"),
    },
  ];

  const section: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.08 },
    },
  };

  const itemUp: Variants = {
    hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      className="w-full bg-white dark:bg-[#1f1629] py-16"
      variants={section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }} // 👈 se anima cuando llega al viewport
    >
      <div className="flex justify-center">
        <div className="w-full px-4 md:px-10">
          <motion.div className="flex flex-col gap-10" variants={section}>
            {/* header */}
            <motion.div
              className="flex flex-col gap-2 md:text-left text-center"
              variants={section}
            >
              <motion.h2
                variants={itemUp}
                className="text-[#141118] dark:text-white text-3xl md:text-4xl font-bold leading-tight"
              >
                Nuestro Enfoque
              </motion.h2>

              <motion.p
                variants={itemUp}
                className="text-[#141118]/60 dark:text-gray-400 text-lg font-normal"
              >
                Cinco pilares fundamentales para promover la igualdad y el
                liderazgo.
              </motion.p>
            </motion.div>

            {/* cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
              variants={section}
            >
              {approachItems.map(({ key, Icon, title, description }) => (
                <motion.div
                  key={key}
                  variants={card}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 420, damping: 26 }}
                  className="flex flex-col gap-4 rounded-xl border border-[#e0dbe6] dark:border-gray-700 bg-background-light dark:bg-background-dark p-6 hover:shadow-lg hover:border-primary/50 transition-all group"
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                    whileHover={{ rotate: -3 }}
                    transition={{ type: "spring", stiffness: 420, damping: 22 }}
                  >
                    <Icon className="w-6 h-6 group-hover:text-white transition-colors" />
                  </motion.div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#141118] dark:text-white text-lg font-bold leading-tight">
                      {title}
                    </h3>
                    <p className="text-[#75608a] dark:text-gray-400 text-sm font-normal leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* overlay sutil al hover (se siente premium) */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
