"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getTranslation, type TranslationKey, type Lang } from "./translations";

export function useTranslation() {
  const { lang } = useLanguage();

  function t(key: TranslationKey): string {
    return getTranslation(key, lang);
  }

  function localizedField<T extends Record<string, unknown>>(
    item: T,
    field: string
  ): string {
    if (lang === "th") {
      const thField = `${field}Th` as keyof T;
      const thValue = item[thField] as string;
      if (thValue) return thValue;
    }
    return (item[field as keyof T] as string) || "";
  }

  return { t, lang, localizedField };
}

export type { Lang, TranslationKey };
