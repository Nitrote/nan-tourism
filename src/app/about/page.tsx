"use client";

import { useTranslation } from "@/lib/useTranslation";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t("about.title")}</h1>
          <p className="text-green-100 text-lg max-w-2xl">{t("about.subtitle")}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{t("about.whyVisit.title")}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{t("about.whyVisit.p1")}</p>
          <p className="text-gray-700 leading-relaxed">{t("about.whyVisit.p2")}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{t("about.history.title")}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{t("about.history.p1")}</p>
          <p className="text-gray-700 leading-relaxed">{t("about.history.p2")}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{t("about.climate.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">{t("about.climate.cool")}</h3>
              <p className="text-gray-700 text-sm">{t("about.climate.cool.desc")}</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">{t("about.climate.hot")}</h3>
              <p className="text-gray-700 text-sm">{t("about.climate.hot.desc")}</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">{t("about.climate.rainy")}</h3>
              <p className="text-gray-700 text-sm">{t("about.climate.rainy.desc")}</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">{t("about.climate.elevation")}</h3>
              <p className="text-gray-700 text-sm">{t("about.climate.elevation.desc")}</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{t("about.people.title")}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{t("about.people.p1")}</p>
          <p className="text-gray-700 leading-relaxed">{t("about.people.p2")}</p>
        </section>
      </div>
    </div>
  );
}
