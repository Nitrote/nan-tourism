"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-[var(--color-warm)]">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden pt-16">
        <Image
          src="/images/village-placeholder.webp"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />

        <div className="relative max-w-6xl mx-auto px-6 pb-14 w-full">
          <p className="text-amber-200/90 text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
            {t("contact.title")}
          </h1>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <p className="text-[var(--color-accent)] text-sm tracking-[0.2em] uppercase font-medium mb-2">
              Message
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">{t("contact.form.title")}</h2>
            <ContactForm />
          </div>

          {/* Info Cards */}
          <div>
            <p className="text-[var(--color-terracotta)] text-sm tracking-[0.2em] uppercase font-medium mb-2">
              Details
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">{t("contact.info.title")}</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                  <span className="text-sm">📧</span>
                </div>
                <h3 className="font-bold mb-1">{t("contact.info.email")}</h3>
                <p className="text-[var(--color-text-muted)] text-sm">info@discovernan.com</p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-3">
                  <span className="text-sm">📍</span>
                </div>
                <h3 className="font-bold mb-1">{t("contact.info.location")}</h3>
                <p className="text-[var(--color-text-muted)] text-sm">{t("contact.info.locationValue")}</p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-[var(--color-terracotta)]/10 flex items-center justify-center mb-3">
                  <span className="text-sm">⏱️</span>
                </div>
                <h3 className="font-bold mb-1">{t("contact.info.responseTime")}</h3>
                <p className="text-[var(--color-text-muted)] text-sm">{t("contact.info.responseTimeValue")}</p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                  <span className="text-sm">💼</span>
                </div>
                <h3 className="font-bold mb-1">{t("contact.info.business")}</h3>
                <p className="text-[var(--color-text-muted)] text-sm">{t("contact.info.businessValue")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
