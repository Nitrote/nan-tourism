"use client";

import { useTranslation } from "@/lib/useTranslation";

export default function TravelInfoPage() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t("travel.title")}</h1>
          <p className="text-green-100 text-lg max-w-2xl">{t("travel.subtitle")}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">✈️ {t("travel.gettingThere")}</h2>
          <div className="space-y-4">
            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">{t("travel.byAir")}</h3>
              <p className="text-gray-700">{t("travel.byAir.desc")}</p>
            </div>
            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">{t("travel.byBus")}</h3>
              <p className="text-gray-700">{t("travel.byBus.desc")}</p>
            </div>
            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">{t("travel.byCar")}</h3>
              <p className="text-gray-700">{t("travel.byCar.desc")}</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">🚗 {t("travel.gettingAround")}</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-4">
            <p className="text-gray-700 font-medium">💡 {t("travel.gettingAround.tip")}</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">📋 {t("travel.visa")}</h2>
          <div className="bg-white border rounded-xl p-6">
            <p className="text-gray-700">{t("travel.visa")}</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">📅 {t("travel.bestTime")}</h2>
          <div className="bg-white border rounded-xl p-6">
            <p className="text-gray-700">{t("about.climate.cool.desc")}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
