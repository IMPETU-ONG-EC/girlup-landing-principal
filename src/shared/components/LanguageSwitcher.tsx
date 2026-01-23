"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "@/src/i18n/navigation";
import { routing, type Locale } from "@/src/i18n/routing";
import { AnimatePresence, motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import * as React from "react";

const LANG_META: Record<string, { label: string; flag: string }> = {
  en: { label: "English", flag: "🇺🇸" },
  es: { label: "Español", flag: "🇪🇸" },
};

const LANGS = routing.locales.map((code) => ({
  code,
  ...(LANG_META[code] ?? { label: code.toUpperCase(), flag: "🌐" }),
})) as ReadonlyArray<{ code: Locale; label: string; flag: string }>;

type Props = {
  className?: string;
  showLabel?: boolean;
};

export default function LanguageSwitcher({
  className,
  showLabel = false,
}: Props) {
  const pathname = usePathname(); // internal pathname: '/', '/about', etc
  const router = useRouter();
  const currentLocale = useLocale() as Locale;

  // IMPORTANT: init state from currentLocale to avoid hydration mismatch
  const [internal, setInternal] = React.useState<Locale>(currentLocale);
  const [expandedLang, setExpandedLang] = React.useState<Locale | null>(
    currentLocale,
  );

  React.useEffect(() => {
    setInternal(currentLocale);
    setExpandedLang(currentLocale);
  }, [currentLocale]);

  const setLang = (code: Locale) => {
    setInternal(code);
    setExpandedLang(code);
    router.replace(pathname, { locale: code });
  };

  const activeIndex = React.useMemo(
    () => LANGS.findIndex((l) => l.code === internal),
    [internal],
  );

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    const max = LANGS.length - 1;
    if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key))
      e.preventDefault();

    if (e.key === "ArrowRight") {
      const next = LANGS[Math.min(max, activeIndex + 1)]?.code;
      if (next) setLang(next);
    }
    if (e.key === "ArrowLeft") {
      const prev = LANGS[Math.max(0, activeIndex - 1)]?.code;
      if (prev) setLang(prev);
    }
    if (e.key === "Home") setLang(LANGS[0].code);
    if (e.key === "End") setLang(LANGS[max].code);
  };

  const getTextWidth = (text: string) => {
    const baseWidth = 60; // flag + padding + gap
    const charWidth = 7.5;
    return Math.max(90, baseWidth + text.length * charWidth);
  };

  const getButtonWidth = (langCode: Locale) => {
    if (expandedLang === langCode) {
      const lang = LANGS.find((l) => l.code === langCode);
      return lang ? getTextWidth(lang.label) : 120;
    }
    return 40;
  };

  const getIndicatorPosition = () => {
    let position = 0;
    for (let i = 0; i < activeIndex; i++) {
      const code = LANGS[i].code;
      const w = expandedLang === code ? getButtonWidth(code) : 40;
      position += w + 4;
    }
    return position;
  };

  const getIndicatorWidth = () => {
    return internal === expandedLang ? getButtonWidth(internal) : 40;
  };

  const smoothTransition = {
    type: "spring" as const,
    stiffness: 200,
    damping: 35,
    mass: 0.6,
  };

  const textTransition = {
    type: "spring" as const,
    stiffness: 200,
    damping: 35,
    mass: 0.6,
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div
        className={cn(
          "inline-flex gap-1 p-1.5 rounded-2xl border border-border/50 w-fit",
          "bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60",
          "shadow-lg shadow-black/5 relative",
          "hover:shadow-xl hover:shadow-black/10 transition-shadow duration-300",
        )}
        role="radiogroup"
        aria-label={
          internal === "es" ? "seleccionar idioma" : "select language"
        }
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <motion.div
          className="absolute inset-1.5 pointer-events-none"
          aria-hidden
        >
          <motion.div
            className="h-10 rounded-xl bg-primary shadow-md"
            animate={{ x: getIndicatorPosition(), width: getIndicatorWidth() }}
            transition={smoothTransition}
          />
        </motion.div>

        {LANGS.map((lang) => {
          const isActive = lang.code === internal;
          const isExpanded = expandedLang === lang.code;
          const buttonWidth = getButtonWidth(lang.code);

          return (
            <motion.button
              key={lang.code}
              role="radio"
              aria-checked={isActive}
              title={lang.label}
              onClick={() => setLang(lang.code)}
              whileTap={{ scale: 0.95 }}
              animate={{ width: buttonWidth }}
              transition={smoothTransition}
              className={cn(
                "relative z-10 h-10 rounded-xl flex items-center overflow-hidden",
                "transition-colors duration-200 ease-out",
                isActive
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              )}
            >
              {isExpanded ? (
                <div className="flex items-center justify-start w-full h-full px-2 gap-2">
                  <span className="text-lg leading-none flex-shrink-0 text-white">
                    {lang.flag}
                  </span>
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={textTransition}
                      className="text-sm font-medium whitespace-nowrap text-white"
                    >
                      {lang.label}
                    </motion.span>
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <span className="text-lg leading-none">{lang.flag}</span>
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      {showLabel && (
        <div className="ml-3 inline-flex items-center text-muted-foreground text-sm">
          <Globe className="mr-1.5 h-4 w-4 opacity-70" />
          <span className="opacity-80 font-medium">
            {LANGS.find((l) => l.code === internal)?.label}
          </span>
        </div>
      )}
    </div>
  );
}
