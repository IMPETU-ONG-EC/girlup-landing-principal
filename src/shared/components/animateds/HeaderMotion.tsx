"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Locale } from "@/src/i18n/routing";
import { MINIMUN_PADDING_SECTIONS } from "@/src/shared/constants/styled";
import LanguageSwitcher from "../LanguageSwitcher";

type HeaderMotionProps = {
  locale: Locale;
  nav: { href: string; label: string; key: string }[];
};

const navContainer = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const navItem = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0 },
};

export default function HeaderMotion({ nav }: HeaderMotionProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60",
        MINIMUN_PADDING_SECTIONS,
      )}
    >
      <div className="w-full mx-auto flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.06, rotate: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 22 }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600"
            >
              <span className="text-sm font-bold text-white">GU</span>
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut", delay: 0.12 }}
              className="text-lg font-semibold"
            >
              Girl Up Ecuador
            </motion.span>
          </Link>
        </motion.div>

        <motion.nav
          variants={navContainer}
          initial="hidden"
          animate="show"
          className="hidden md:flex items-center gap-6"
        >
          {nav.map((item) => (
            <Link
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-purple-600"
              key={item.key}
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.08 }}
          className="flex justify-end items-center gap-2"
        >
          <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.95 }}>
            <LanguageSwitcher />
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Button className="bg-purple-600 text-white hover:bg-purple-700">
              Donar
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
}
