"use client";

import { useTranslation } from "@/lib/useTranslation";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t("contact.title")}</h1>
          <p className="text-green-100 text-lg max-w-2xl">{t("contact.subtitle")}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">{t("contact.form.title")}</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">{t("contact.info.title")}</h2>
            <div className="space-y-6">
              <div className="bg-green-50 rounded-xl p-5">
                <h3 className="font-bold mb-1">{t("contact.info.email")}</h3>
                <p className="text-gray-600 text-sm">info@discovernan.com</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-5">
                <h3 className="font-bold mb-1">{t("contact.info.location")}</h3>
                <p className="text-gray-600 text-sm">{t("contact.info.locationValue")}</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-5">
                <h3 className="font-bold mb-1">{t("contact.info.responseTime")}</h3>
                <p className="text-gray-600 text-sm">{t("contact.info.responseTimeValue")}</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-5">
                <h3 className="font-bold mb-1">{t("contact.info.business")}</h3>
                <p className="text-gray-600 text-sm">{t("contact.info.businessValue")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
