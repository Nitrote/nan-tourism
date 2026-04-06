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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-[var(--color-sky-dark)]/10 mix-blend-multiply" />

        <div className="relative max-w-6xl mx-auto px-6 pb-14 w-full">
          <p className="text-[var(--color-sky-light)]/90 text-sm tracking-[0.3em] uppercase mb-3 font-medium">
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
          <span className="inline-block bg-[var(--color-sky)] text-white text-sm tracking-[0.2em] uppercase font-medium px-3 py-1.5 rounded-full mb-3">
            Transportation
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{t("travel.gettingThere")}</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[var(--color-sky)]">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[var(--color-sky)] shrink-0 mt-2" />
                <div>
                  <h3 className="font-bold text-lg mb-2">{t("travel.byAir")}</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">{t("travel.byAir.desc")}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[var(--color-golden)]">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[var(--color-golden)] shrink-0 mt-2" />
                <div>
                  <h3 className="font-bold text-lg mb-2">{t("travel.byBus")}</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">{t("travel.byBus.desc")}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[var(--color-sky-dark)]">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[var(--color-sky-dark)] shrink-0 mt-2" />
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
          <span className="inline-block bg-[var(--color-golden)] text-white text-sm tracking-[0.2em] uppercase font-medium px-3 py-1.5 rounded-full mb-3">
            Local Travel
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{t("travel.gettingAround")}</h2>
          <div className="bg-[var(--color-sky-tint)] rounded-2xl p-6 shadow-sm border-l-4 border-[var(--color-sky)]">
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              <span className="font-semibold text-[var(--color-sky)]">Tip:</span>{" "}
              {t("travel.gettingAround.tip")}
            </p>
          </div>
        </section>

        {/* Visa */}
        <section className="mb-16">
          <span className="inline-block bg-[var(--color-sky)] text-white text-sm tracking-[0.2em] uppercase font-medium px-3 py-1.5 rounded-full mb-3">
            Entry
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{t("travel.visa")}</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-[var(--color-text-muted)] leading-relaxed">{t("travel.visa")}</p>
          </div>
        </section>

        {/* Best Time */}
        <section>
          <span className="inline-block bg-[var(--color-sky)] text-white text-sm tracking-[0.2em] uppercase font-medium px-3 py-1.5 rounded-full mb-3">
            Seasons
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{t("travel.bestTime")}</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-[var(--color-text-muted)] leading-relaxed">{t("about.climate.cool.desc")}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
