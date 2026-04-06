"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-[var(--color-warm)]">
      {/* Hero with image background */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden pt-16">
        <Image
          src="/images/village-placeholder.webp"
          alt="About Nan Province"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />

        <div className="relative max-w-6xl mx-auto px-6 pb-14 w-full">
          <p className="text-amber-200/90 text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Discover
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
            {t("about.title")}
          </h1>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Why Visit */}
        <section className="mb-16">
          <span className="inline-block bg-[var(--color-primary)] text-white text-sm tracking-[0.2em] uppercase font-medium px-3 py-1.5 rounded-full mb-3">
            Why Nan
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{t("about.whyVisit.title")}</h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-4 text-lg">
            {t("about.whyVisit.p1")}
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed text-lg">
            {t("about.whyVisit.p2")}
          </p>
        </section>

        {/* History */}
        <section className="mb-16 bg-[var(--color-coral-tint)] rounded-3xl p-8 -mx-8">
          <span className="inline-block bg-[var(--color-primary)] text-white text-sm tracking-[0.2em] uppercase font-medium px-3 py-1.5 rounded-full mb-3">
            Heritage
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{t("about.history.title")}</h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-4 text-lg">
            {t("about.history.p1")}
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed text-lg">
            {t("about.history.p2")}
          </p>
        </section>

        {/* Climate Cards */}
        <section className="mb-16">
          <span className="inline-block bg-[var(--color-primary)] text-white text-sm tracking-[0.2em] uppercase font-medium px-3 py-1.5 rounded-full mb-3">
            Seasons
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{t("about.climate.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-[3px] border-[var(--color-primary)]">
              <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] mb-4" />
              <h3 className="font-bold text-lg mb-2">{t("about.climate.cool")}</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{t("about.climate.cool.desc")}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-[3px] border-[var(--color-accent)]">
              <div className="w-3 h-3 rounded-full bg-[var(--color-accent)] mb-4" />
              <h3 className="font-bold text-lg mb-2">{t("about.climate.hot")}</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{t("about.climate.hot.desc")}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-[3px] border-[var(--color-primary-dark)]">
              <div className="w-3 h-3 rounded-full bg-[var(--color-primary-dark)] mb-4" />
              <h3 className="font-bold text-lg mb-2">{t("about.climate.rainy")}</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{t("about.climate.rainy.desc")}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border-t-[3px] border-[var(--color-lavender)]">
              <div className="w-3 h-3 rounded-full bg-[var(--color-lavender)] mb-4" />
              <h3 className="font-bold text-lg mb-2">{t("about.climate.elevation")}</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{t("about.climate.elevation.desc")}</p>
            </div>
          </div>
        </section>

        {/* People & Culture */}
        <section className="mb-16 bg-[var(--color-lavender-tint)] rounded-3xl p-8 -mx-8">
          <span className="inline-block bg-[var(--color-primary)] text-white text-sm tracking-[0.2em] uppercase font-medium px-3 py-1.5 rounded-full mb-3">
            Community
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{t("about.people.title")}</h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-4 text-lg">
            {t("about.people.p1")}
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed text-lg">
            {t("about.people.p2")}
          </p>
        </section>
      </div>
    </div>
  );
}
