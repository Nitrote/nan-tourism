"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";

export default function TravelInfoPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-[var(--color-warm)]">
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden pt-16">
        <Image
          src="/images/village-placeholder.webp"
          alt="Travel Info"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#E07A5F]/15 to-[#F5D040]/10 mix-blend-multiply" />

        <div className="relative max-w-6xl mx-auto px-6 pb-14 w-full">
          <p className="text-[#F5D040]/90 text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Plan Your Trip
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
            {t("travel.title")}
          </h1>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed">
            {t("travel.subtitle")}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Getting There */}
        <section className="mb-16">
          <p className="text-[var(--color-accent)] text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Transportation
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{t("travel.gettingThere")}</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-lg">✈️</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t("travel.byAir")}</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">{t("travel.byAir.desc")}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-lg">🚌</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t("travel.byBus")}</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">{t("travel.byBus.desc")}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-terracotta)]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-lg">🚗</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t("travel.byCar")}</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">{t("travel.byCar.desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Around */}
        <section className="mb-16">
          <p className="text-[var(--color-terracotta)] text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Local Travel
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{t("travel.gettingAround")}</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[var(--color-accent)]">
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              <span className="font-semibold text-[var(--color-text)]">💡 Tip:</span>{" "}
              {t("travel.gettingAround.tip")}
            </p>
          </div>
        </section>

        {/* Visa */}
        <section className="mb-16">
          <p className="text-[var(--color-accent)] text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Entry
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{t("travel.visa")}</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-[var(--color-text-muted)] leading-relaxed">{t("travel.visa")}</p>
          </div>
        </section>

        {/* Best Time */}
        <section>
          <p className="text-[var(--color-terracotta)] text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Seasons
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{t("travel.bestTime")}</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-[var(--color-text-muted)] leading-relaxed">{t("about.climate.cool.desc")}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
